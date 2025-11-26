const express = require('express');
const router = express.Router();
const OrdersController = require('../../controllers/admin/ordersController');

router.get('/', OrdersController.renderOrdersPage);
router.get('/new-order', OrdersController.renderNewOrder);

module.exports = router;