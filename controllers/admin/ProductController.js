//ProductController.js
const db = require('../../models');

// READ - Viser alle Produkter
exports.renderProducts = async (req, res) => {
  try {
        const products = await db.product.findAll({
            attributes: ['products_name']
        });

        res.render('admin/products/products', {
            title: 'Produkter',
            products
        });

        } catch (error) {
            console.error('Fejl ved hentning af produkter:', error);
            res.status(500).send('Databasefejl');
        }
};
