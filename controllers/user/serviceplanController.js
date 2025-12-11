// controllers/user/serviceplanController.js
const db = require('../../models');

// RENDER - viser oversit over alle serviceplans
exports.renderServiceplans = async (req, res) => {
    try {
        const userId = req.session.user.id;

        // Hent bruger med stationer og deres opgaver
        const user = await db.user.findByPk(userId, {
            include: [
                {
                    model: db.station,
                    as: 'stations',
                    include: [
                        {
                            model: db.serviceplan,
                            as: 'serviceplans'
                        }
                    ]
                }
            ]
        });

        res.render('users/serviceplan', {
            title: 'Mine Opgaver',
            stations: user.stations
        });

    } catch (error) {
        console.error("Fejl i serviceplan:", error);
        res.status(500).send("Databasefejl");
    }
};

// UPDATE - acceptere serviceplan og gør den aktiv
exports.acceptServiceplan = async (req, res) => {
  try {

    const plan = await db.serviceplan.findByPk(req.params.id);
    await plan.update({ accepted_at: new Date() });
    
    res.redirect('/serviceplan');

  } catch (error) {
      console.error("Fejl i acceptServiceplan:", error);
      res.status(500).send("Databasefejl");
  }
};

// RENDER - Viser serviceplan formen
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

    const defaultDate = plan.accepted_at.toISOString().slice(0, 10);

    res.render('users/serviceplanform', {
      plan,
      products,
      units,
      defaultDate,
      user,
    });

  } catch (error) {
    console.error(error);
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

    const { done_date, product_id, amount, amount_unit } = req.body;

    await plan.update({
      serviceplan_done_at: done_date,
      comment
    });

    if (product_id && amount) {
      await db.serviceplan_product.create({
        serviceplan_id: plan.id,
        product_id,
        amount,
        unit: amount_unit
      });
    }

    return res.redirect('/serviceplan');

  } catch (error) {
    console.error("Fejl i submitSinglePlan:", error);
    return res.status(500).send("Serverfejl");
  }
};




