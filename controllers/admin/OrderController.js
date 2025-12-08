// OrderController.js
const db = require('../../models');

// READ - Viser alle Ordre
exports.renderOrders = async (req, res) => {
  try {
    const orders = await db.serviceplan.findAll({
        attributes: [
            'id',
            'serviceplan_done_at',
            'station_id',
            'user_id'
          ]
    });

    res.render('admin/orders/orders', {
      title: 'Ordreoversigt (Serviceopgaver)',
      orders
    });

    } catch (error) {
        console.error('Fejl ved hentning af ordrer:', error);
        res.status(500).send('Databasefejl');
    }
};
