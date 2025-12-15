//ProductController.js
const db = require('../../models');

// Read
exports.renderProducts = async (req, res) => {
  try {
        const products = await db.product.findAll({
            attributes: ['id', 'products_name', 'unit_id']
        });

        res.render('admin/products/products', {
            title: 'Produkter',
            items: products,
            fields: ['products_name'],
            editUrl: '/products/edit-product',
            deleteUrl: '/products'
        });

        } catch (error) {
            console.error('Fejl ved hentning af produkter:', error);
            res.status(500).send('Databasefejl');
        }
};

// Render formular til oprettelse af nyt produkt
exports.renderCreateProduct = async (req, res) => {
    try {
        const units = await db.unit.findAll({
            attributes: ['id', 'unit', 'short_unit']
        });
        res.render('admin/products/new-product', {
            title: 'Opret nyt produkt',
            units
        });
    } catch (error) {
        console.error('Fejl ved hentning af enheder:', error);
        res.status(500).send('Databasefejl');
    }
}

// Create 
exports.createProduct = async (req, res) => {
    try {
        const { products_name, unit_id } = req.body;
        await db.product.create({ products_name, unit_id });
        res.redirect('/products');
    } catch (error) {
        console.error('Fejl ved oprettelse af produkt:', error);
        res.status(500).send('Databasefejl');
    }
};

// Render formular til redigering af produkt
exports.renderEditProduct = async (req, res) => {
    try {
        const product = await db.product.findByPk(req.params.id, {
            attributes: ['id', 'products_name', 'unit_id']
        });
        const units = await db.unit.findAll({
            attributes: ['id', 'unit', 'short_unit']
        });
        if (!product) {
            return res.status(404).send('Produkt ikke fundet');
        }
        res.render('admin/products/edit-product', {
            title: 'Rediger produkt',
            items: product,
            units
        });
    } catch (error) {
        console.error('Fejl ved hentning af produkt:', error);
        res.status(500).send('Databasefejl');
    }
};

// Update
exports.updateProduct = async (req, res) => {
    try {
        const { products_name, unit_id } = req.body;
        await db.product.update(
            { products_name, unit_id },
            { where: { id: req.params.id } }
        );
        res.redirect('/products');
    } catch (error) {
        console.error('Fejl ved opdatering af produkt:', error);
        res.status(500).send('Databasefejl');
    }
};

// Delete
exports.deleteProduct = async (req, res) => {
    try {
        await db.product.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/products');
    } catch (error) {
        console.error('Fejl ved sletning af produkt:', error);
        res.status(500).send('Databasefejl');
    }
};