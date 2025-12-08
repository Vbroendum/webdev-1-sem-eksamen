// productRoute.js
const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/admin/ProductController');

// GET - Viser alle produkter
router.get('/', ProductController.renderProducts);

module.exports = router;
