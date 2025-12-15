// controllers/user/serviceplanController.js
const db = require('../../models');
const { Op } = require("sequelize");
const transporter = require('../../services/mailer');
const crypto = require('crypto');


// RENDER - viser alle serviceplaner for brugerens stationer
exports.renderServiceplans = async (req, res) => {
  try {
    const userId = req.session.user.id;

    // Finder stationer som brugeren er tilknyttet
    const userStations = await db.user_station.findAll({
      where: { user_id: userId },
      attributes: ['station_id']
    });

    const stationIds = userStations.map(s => s.station_id);

    if (stationIds.length === 0) {
      return res.render("users/serviceplan", {
        title: "Mine Opgaver",
        serviceplans: []
      });
    }

    const serviceplans = await db.serviceplan.findAll({
      where: {
        station_id: stationIds,
        serviceplan_done_at: null,
        [Op.or]: [
          { user_id: null },
          { user_id: userId }
        ]
      },
      include: [{
        model: db.station,
        as: 'station',
        attributes: ['station_name', 'station_address']
      }]
    });

    res.render("users/serviceplan", {
      title: "Mine Opgaver",
      serviceplans
    });

  } catch (error) {
    console.error("Fejl i renderServiceplans:", error);
    res.status(500).send("Databasefejl");
  }
};


// UPDATE - acceptere serviceplan og låser den til brugeren
exports.acceptServiceplan = async (req, res) => {
  try {
    const plan = await db.serviceplan.findByPk(req.params.id);

    await plan.update({
      user_id: req.session.user.id
    });

    res.redirect('/serviceplan');

  } catch (error) {
    console.error("Fejl i acceptServiceplan:", error);
    res.status(500).send("Databasefejl");
  }
};

// UPDATE - annullere serviceplanen
exports.cancelServiceplan = async (req, res) => {
  try {
    const plan = await db.serviceplan.findByPk(req.params.id);

    await plan.update({
      user_id: null
    });

    res.redirect('/serviceplan');

  } catch(error) {
    console.error('Fejl i anullering af serviceplan', error);
    res.status(500).send('Databasefejl');

  }
};



// RENDER - Viser serviceplanformen
exports.renderServiceplanForm = async (req, res) => {
  try {
    const plan = await db.serviceplan.findByPk(req.params.id, {
      include: [
        {
          model: db.user,
          as: 'user',
          attributes: ['id', 'first_name', 'last_name']
        }
      ]
    });

    const products = await db.product.findAll({
      include: [
        {
          model: db.unit,
          as: 'unit',
          attributes: ['short_unit']
        }
      ]
    });

    const units = await db.unit.findAll({
      attributes: ['id', 'unit', 'short_unit']
    });


    const today = new Date().toISOString().slice(0, 10);

    res.render('users/serviceplanform', {
      plan,
      products,
      units,
      defaultDate: today,
    });

  } catch (error) {
    console.error("Fejl i renderServiceplanForm:", error);
    res.status(500).send("Fejl ved hentning");
  }
};



// UPDATE - Submitter formen
exports.submitServiceplanForm = async (req, res) => {
  try {
    const plan = await db.serviceplan.findByPk(req.params.id);
    if (!plan) return res.status(404).send("Serviceplan ikke fundet");

    const { serviceplan_done_at, product = [], quantity = [], unit = [] } = req.body;

    // Marker serviceplan som færdig
    await plan.update({ serviceplan_done_at });

    // Loop igennem rækkerne
    for (let i = 0; i < product.length; i++) {
      const p = product[i];
      const q = quantity[i];
      const u = unit[i];

      // Spring tomme rækker over
      if (!p || !q || !u) continue;

      // Brug UPSERT i stedet for create — så undgår du duplicates
      await db.serviceplan_product.upsert({
        serviceplan_id: plan.id,
        product_id: p,
        quantity: q,
        unit: u
      });
    }

    // Billeder (multer)
    if (req.files) {
      // før-billeder
      if (req.files.before_image) {
        for (const file of req.files.before_image) {
          await db.image.create({
            serviceplan_id: plan.id,
            upload_date: new Date(),
            is_after: false,
            filepath: `/uploads/serviceplan-images/${file.filename}`
          });
        }
      }
      // efter-billeder
      if (req.files.after_image) {
        for (const file of req.files.after_image) {
          await db.image.create({
            serviceplan_id: plan.id,
            upload_date: new Date(),
            is_after: true,
            filepath: `/uploads/serviceplan-images/${file.filename}`
          });
        }
      }
    }

    // Generer engangslink
    const uuid = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000); // 48 timer

    await db.onetime_link.create({
      uuid,
      serviceplan_id: plan.id,
      expiresAt
    });

    const link = `http://localhost:3000/serviceplan/verify/${uuid}`;

    // Send mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // afsender
      to: process.env.EMAIL_RECEIVER, // modtager
      subject: `Serviceplan #${plan.id} er klar`,
      text: `Din serviceplan er klar. Klik her for at se den: ${link}`,
      html: `<p>Din serviceplan er klar.</p><p><a href="${link}">Se serviceplan</a></p>`
    });

    return res.redirect('/serviceplan');

  } catch (error) {
    console.error("Fejl i submitServiceplanForm:", error);
    return res.status(500).send("Serverfejl");
  }
};
