const db = require('../models');
const { Op } = require('sequelize');

exports.renderHistory = async (req, res) => {
  try {
    const { id: userId, role_id: role } = req.session.user;

    // Hvis user → vis kun egne opgaver
    // Hvis admin → vis alle opgaver
    const filter = role === 2
      ? { user_id: userId }
      : {}; 

    const history = await db.serviceplan.findAll({
      where: {
        ...filter,
        serviceplan_done_at: { [Op.ne]: null }
      },
      include: [
        {
          model: db.station,
          as: 'station',
          attributes: ['station_name']
        },
        {
          model: db.user,
          as: 'user',
          attributes: ['first_name', 'last_name']
        }
      ],
      order: [['serviceplan_done_at', 'DESC']]
    });

    res.render('history', {
      title: 'Historik',
      history
    });

  } catch (error) {
    console.error("Fejl i historik:", error);
    res.status(500).send("Databasefejl");
  }
};
