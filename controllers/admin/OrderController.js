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
            'user_id',
          ],
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
          ]
    });

    const formattedOrders = orders.map(order => ({
        id: order.id,
        station_name: order.station?.station_name || 'N/A',
        user_name: order.user ? `${order.user.first_name} ${order.user.last_name}` : 'Ikke tildelt',
        serviceplan_done_at: order.serviceplan_done_at,
        station_id: order.station_id,
        user_id: order.user_id
    }));

    res.render('admin/orders/orders', {
      title: 'Ordreoversigt (Serviceopgaver)',
      items: formattedOrders,
      fields: ['station_name', 'user_name'],
      editUrl: '/orders/edit-order',
      deleteUrl: '/orders'
    });

    } catch (error) {
        console.error('Fejl ved hentning af ordrer:', error);
        res.status(500).send('Databasefejl');
    }
};

exports.renderCreateOrder = async (req, res) => {
    try {
        const stations = await db.station.findAll({
            attributes: ['id', 'station_name']
        });

        const users = await db.user.findAll({
            attributes: ['id', 'first_name', 'last_name']
        });

        console.log('antal users fundet', users.length)

    res.render('admin/orders/new-order', {
        title: 'Opret ny ordre (Serviceopgave)',
        stations,
        users
    });
    } catch (error) {
        console.error('Fejl ved hentning af stationer:', error);
        res.status(500).send('Databasefejl');
    }
};

exports.createOrder = async (req, res) => {
    try {
        const { stationer, deadline, user_id } = req.body;

        await db.serviceplan.create({
            station_id: stationer,
            serviceplan_expired_at: deadline,
            serviceplan_done_at: null,
            user_id: user_id || null
        });

        res.redirect('/orders');

    } catch (error) {
        console.error('Fejl ved oprettelse af ordre:', error);
        res.status(500).send('Databasefejl');
    }
};

exports.renderEditOrder = async (req, res) => {
    // Implementation for rendering edit order page
    try {
        const orderId = req.params.id;
        
        const order = await db.serviceplan.findByPk(orderId, {
            include: [
                {
                    model: db.station,
                    as: 'station',
                    attributes: ['id', 'station_name']
                }
            ]
        });
        const formattedOrder = {
            ...order.toJSON(),
            serviceplan_expired_at: order.serviceplan_expired_at ? 
                new Date(order.serviceplan_expired_at).toISOString().split('T')[0] : '',
            serviceplan_done_at: order.serviceplan_done_at ? 
                new Date(order.serviceplan_done_at).toISOString().split('T')[0] : ''
        };

        if (!order) {
            return res.status(404).send('Ordre ikke fundet');
        }

        const stations = await db.station.findAll({
            attributes: ['id', 'station_name']
        });

        const users = await db.user.findAll({
            attributes: ['id', 'first_name', 'last_name']
        });

        res.render('admin/orders/edit-order', {
            title: 'Rediger ordre',
            order, formattedOrder,
            stations,
            users
        });

    } catch (error) {
        console.error('Fejl ved hentning af ordre:', error);
        res.status(500).send('Databasefejl');
    }
};

exports.updateOrder = async (req, res) => {
    // Implementation for updating an order
    try {
        const orderId = req.params.id;
        const { stationer, deadline, done_at, user_id } = req.body;
        const order = await db.serviceplan.findByPk(orderId);

        if (!order) {
            return res.status(404).send('Ordre ikke fundet');
        }
        await order.update({
            station_id: stationer,
            serviceplan_expired_at: deadline,
            serviceplan_done_at: done_at || null,
            user_id: user_id || null
        });

        res.redirect('/orders');

    } catch (error) {
        console.error('Fejl ved opdatering af ordre:', error);
        res.status(500).send('Databasefejl');
    }
};

// DELETE - Slet en ordre
exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await db.serviceplan.findByPk(orderId);
    if (!order) {
      return res.status(404).send('Ordre ikke fundet');
    }
    await order.destroy();
    res.status(200).send('Ordre slettet');
  } catch (error) {
    console.error('Fejl ved sletning af ordre:', error);
    res.status(500).send('Databasefejl');
  }
};


