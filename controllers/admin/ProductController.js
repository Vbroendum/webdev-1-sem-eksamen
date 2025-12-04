const productModel = require('../../models/admin/productModel');

exports.renderProductsPage = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        
        res.render('admin/products/products', {
            title: 'Produktoversigt',
            items: products,
            fields: ['product_name', 'unit_name']  // fra unit id to unit_name
        });
    } catch (error) {
        console.error('Fejl:', error);
        res.status(500).send('Der opstod en fejl ved hentning af produkter.');
    }
};

exports.renderNewProduct = async (req, res) => {
    try {
        res.render('admin/products/new-product', {
            title: 'Nyt Produkt'
        });
    } catch (error) {
        console.error('Fejl:', error);
        res.status(500).send('Der opstod en fejl.');
    }
};

exports.createProduct = async (req, res) => {
    try {
        const productData = {
            products_name: req.body.products_name,
            unit_id: req.body.unit_id
        };
        
        await productModel.createProduct(productData);
        res.redirect('/products');
    } catch (error) {
        console.error('Fejl ved oprettelse af produkt:', error);
        res.status(500).send('Der opstod en fejl ved oprettelse af produkt.');
    }
};