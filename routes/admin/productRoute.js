const express = require('express');
const router = express.Router();
const ProductsController = require('../../controllers/admin/productsController');

router.get('/', ProductsController.renderProductsPage);

router.get('/new-product', ProductsController.renderNewProduct);

router.post('/', ProductsController.createProduct);

module.exports = router;