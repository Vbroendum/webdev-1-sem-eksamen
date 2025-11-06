class ProductsController {
    static renderProductsPage(req, res) {

        const products = [
            { "id": 1, "pName": "Salt", 'unit': 'l'},
            { "id": 2, "pName": "Citronsyre", 'unit': 'kg'}
        ];

        res.render('admin/products/products', { 
            title: 'Produktoversigt', 
            items: products,
            fields: ['pName', 'unit']
         });
    }
}

module.exports = ProductsController;