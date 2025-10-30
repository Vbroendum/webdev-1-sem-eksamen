class ProductsController {
    static renderProductsPage(req, res) {
        res.render('admin/products/products', { title: 'Products' });
    }
}

module.exports = ProductsController;