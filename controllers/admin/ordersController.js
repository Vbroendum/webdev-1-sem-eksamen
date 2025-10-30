class OrdersController {
    static renderOrdersPage(req, res) {
        res.render('admin/orders/orders', { title: 'Orders' });
    }
}

module.exports = OrdersController;