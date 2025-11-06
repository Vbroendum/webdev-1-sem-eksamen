class OrdersController {
    static renderOrdersPage(req, res) {

        const orders = [
            { "id": 1, "pName": "Salt", 'unit': 'l'},
            { "id": 2, "pName": "Citronsyre", 'unit': 'kg'}
        ];

        res.render('admin/orders/orders', { 
            title: 'Ordreroversigt', 
            items: orders,
            fields: ['pName', 'unit']
         });
    }

    static newOrder(req, res) {
        res.render('admin/orders/new-order', {
            title: 'Opret ny bruger'
        })
       }
   }

module.exports = OrdersController;