// controllers/user/serviceplanController.js
const db = require('../../models');
const { Op } = require("sequelize");


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



exports.submitServiceplanForm = async (req, res) => {
  try {
    const plan = await db.serviceplan.findByPk(req.params.id);
    if (!plan) return res.status(404).send("Serviceplan ikke fundet");

    const { serviceplan_done_at, product = [], quantity = [], unit = [] } = req.body;

    // Marker serviceplan som færdig
    await plan.update({ serviceplan_done_at });

    // Loop igennem rækkerne (produkt + mængde + enhed)
    for (let i = 0; i < product.length; i++) {
      const p = product[i];
      const q = quantity[i];
      const u = unit[i];

      // ⭐ SPRING TOMME RÆKKER OVER (vigtigt!)
      if (!p || !q || !u) continue;

      await db.serviceplan_product.create({
        serviceplan_id: plan.id,
        product_id: p,
        quantity: q,   // <-- BRUG DET KORREKTE FELTNAVN
        unit: u
      });
    }

    return res.redirect('/serviceplan');

  } catch (error) {
    console.error("Fejl i submitServiceplanForm:", error);
    res.status(500).send("Serverfejl");
  }
};

