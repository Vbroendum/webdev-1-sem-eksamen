// controllers/user/serviceplanController.js
const db = require('../../models');
const { Op } = require("sequelize");


// RENDER - viser alle serviceplaner for brugerens stationer
exports.renderServiceplans = async (req, res) => {
  try {
    const userId = req.session.user.id;

    // 1️⃣ Find stationer som brugeren er tilknyttet
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

    // 2️⃣ Find serviceplans der enten:
    // - ikke er accepteret (user_id = null)
    // - eller er accepteret af denne bruger
    const serviceplans = await db.serviceplan.findAll({
      where: {
        station_id: stationIds,
        [Op.or]: [
          { user_id: null },
          { user_id: userId }
        ]
      },
      include: [{
        model: db.station,
        as: 'station',
        attributes: ['station_name']
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



// RENDER - Viser serviceplan-formen
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
      attributes: ['id', 'products_name'],
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

    const user = await db.user.findByPk(req.session.user.id, {
      attributes: ['id', 'first_name', 'last_name']
    });

    const today = new Date().toISOString().slice(0, 10);

    res.render('users/serviceplanform', {
      plan,
      products,
      units,
      defaultDate: today,
      user
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

    if (!plan) {
      return res.status(404).send("Serviceplan ikke fundet");
    }

    const { serviceplan_done_at, product, quantity, unit } = req.body;

    // Opdater serviceplan
    await plan.update({
      serviceplan_done_at,
    });

    // Tilføj produktforbrug hvis valgt
    const productsArray = Array.isArray(product) ? product : [product];
    const quantityArray = Array.isArray(quantity) ? quantity : [quantity];
    const unitArray = Array.isArray(unit) ? unit : [unit];

    for (let i = 0; i < productsArray.length; i++) {
      if (productsArray[i] && quantityArray[i]) {
        await db.serviceplan_product.upsert({
          serviceplan_id: plan.id,
          product_id: productsArray[i],
          quantity: quantityArray[i],
          unit: unitArray[i]
        });
      }
    }

    // Håndter billede uploads
    // req.files er et objekt med fieldnames som keys når man bruger upload.fields()
    if (req.files) {
      // Håndter før-billeder
      if (req.files.before_image && Array.isArray(req.files.before_image)) {
        for (const file of req.files.before_image) {
          await db.image.create({
            serviceplan_id: plan.id,
            upload_date: new Date(),
            is_after: false,
            filepath: `/uploads/serviceplan-images/${file.filename}`
          });
        }
      }

      // Håndter efter-billeder
      if (req.files.after_image && Array.isArray(req.files.after_image)) {
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

    return res.redirect('/serviceplan');

  } catch (error) {
    console.error("Fejl i submitServiceplanForm:", error);
    return res.status(500).send("Serverfejl");
  }
};
