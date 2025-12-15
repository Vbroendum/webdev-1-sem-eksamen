const db = require('../models');
const { Op } = require('sequelize');

// RENDER - viser historikken
exports.renderHistory = async (req, res) => {
  try {
    const { id: userId, role_id: role } = req.session.user;

    const filter = role === 2 
      ? { user_id: userId }
      : {};

    const history = await db.serviceplan.findAll({
      where: {
        ...filter,
        serviceplan_done_at: { [Op.ne]: null }
      },
      include: [
        { model: db.station, as: 'station', attributes: ['station_name'] },
        { model: db.user, as: 'user', attributes: ['first_name', 'last_name'] },
        { model: db.image, as: 'images' }
      ],
      order: [['serviceplan_done_at', 'DESC']]
    });

    const cleanedHistory = history.map(plan => {
      let preview = null;

      if (plan.images?.length) {
        const before = plan.images.find(img => img.is_after === false);
        preview = before ? before.filepath : plan.images[0].filepath;
      }

      return {
        ...plan.toJSON(),
        previewImage: preview
      };
    });

    res.render('history', {
      title: 'Historik',
      history: cleanedHistory
    });

  } catch (error) {
    console.error("Fejl i historik:", error);
    res.status(500).send("Databasefejl");
  }
};
