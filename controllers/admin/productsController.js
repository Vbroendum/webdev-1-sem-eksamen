const db = require('../../models');
const { Product } = require('../../models');

exports.renderProductsPage = async (req, res) => {
try {
        const products = await db.Product.findAll({
            title: 'Produktoversigt',
            items: products,
            fields: ['product_name', 'unit_name']
        });
        res.render('admin/products.hbs', { products });
    } catch (error) {
        console.error("Fejl ved hentning af produkter:", error);
        res.status(500).send("Der opstod en fejl under indlæsningen af produkter.");
    }
};

exports.renderNewProduct = async (req, res) => {
    try {
        const products = await db.Product.findAll({
            title: 'Nyt Produkt'
        });
        res.render('admin/products.hbs', { products });
    } catch (error) {
        console.error('Fejl:', error);
        res.status(500).send('Der opstod en fejl.');
    }
};

exports.createProduct = async (req, res) => {
    try {
        const products = await Product.findAll({ 
        });
        res.render('admin/products.hbs', { products });
    } catch (error) {
        console.error("Fejl ved hentning af produkter:", error);
        res.status(500).send("Der opstod en fejl under indlæsningen af produkter.");
    }
};