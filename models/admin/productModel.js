const db = require('../../config/database');
const Unit = require('./unitModel'); 

exports.getAllProducts = async () => {
    try {
        const query = `
            SELECT 
                p.products_id,
                p.products_name,
                u.short_unit
            FROM products p
            LEFT JOIN units u ON p.unit_id = u.unit_id
        `;
        
        const [products] = await db.query(query);
        return products.map(product => ({
            products_id: product.products_id,
            products_name: product.products_name,
            short_unit: product.short_unit || 'N/A'
        }));
    } catch (error) {
        console.error('Fejl ved hentning af produkter:', error);
        throw error;
    }
};

exports.createProduct = async (productData) => {
    try {
        const query = `
            INSERT INTO products (products_name, unit_id)
            VALUES (?, ?)
        `;
        
        const [result] = await db.query(query, [
            productData.products_name,
            productData.unit_id
        ]);
        
        return {
            products_id: result.insertId,
            products_name: productData.products_name,
            unit_id: productData.unit_id
        };
    } catch (error) {
        console.error('Fejl ved oprettelse af produkt:', error);
        throw error;
    }
};