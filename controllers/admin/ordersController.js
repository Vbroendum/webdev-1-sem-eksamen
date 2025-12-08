exports.renderOrdersPage = (req, res) => {
    const orders = [
        { "id": 1, "pName": "Salt", 'unit': 'l'},
        { "id": 2, "pName": "Citronsyre", 'unit': 'kg'}
    ];
    res.render('admin/orders/orders', { 
        title: 'Ordreroversigt', 
        items: orders,
        fields: ['pName', 'unit']
     });
};

exports.renderNewOrder = (req, res) => {
    res.render('admin/orders/new-order', { title: 'Ny Ordre' });
};