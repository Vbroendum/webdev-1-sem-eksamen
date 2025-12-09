// productRoute.js
const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/admin/ProductController');

// Read
router.get('/', ProductController.renderProducts);

// Create
router.get('/create', ProductController.renderCreateProduct);
router.post('/create', ProductController.createProduct);

// Update
router.get('/edit/:id', ProductController.renderEditProduct);
router.post('/edit/:id', ProductController.updateProduct);  

// Delete
router.post('/delete/:id', ProductController.deleteProduct);

module.exports = router;
