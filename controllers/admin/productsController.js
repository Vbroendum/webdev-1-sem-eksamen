class ProductsController {
    static renderProductsPage(req, res) {
        res.render('products', { title: 'Products' });
    }
}

module.exports = ProductsController;