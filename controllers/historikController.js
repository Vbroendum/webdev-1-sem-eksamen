const db = require('../models');
const { Op } = require('sequelize');

exports.renderHistory = async (req, res) => {
    try {
        const { id: userId, role_id: role} = req.session.user;

        const filter = {
            user_id: userId,
            serviceplan_done_at: { [Op.ne]: null }
        };

        const history = await db.serviceplan.findAll({
            where: filter, 
            include: [{
                model: db.station,
                as: 'station',
                attributes: ['station_name']
            }]
        })

        res.render('history', {
            title: 'Historik'
        })

    } catch(error) {
        console.error("Fejl i historik:", error);
        res.status(500).send("Databasefejl");
    }
}