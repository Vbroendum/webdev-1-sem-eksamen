// ServiceplanController.js
const db = require('../../models');

// READ - Viser alle ordre
exports.renderServiceplans = async (req, res) => {
  try {
    const serviceplans = await db.serviceplan.findAll({
      attributes: ['id', 'serviceplan_done_at', 'station_id', 'user_id']
    });

    res.render('users/serviceplan', {
      title: 'Serviceplaner',
      serviceplans
    });

  } catch (error) {
    console.error('Fejl ved hentning af serviceplaner:', error);
    res.status(500).send('Databasefejl');
  }
};
