const express = require('express');
const router = express.Router();
const OrdersController = require('../../controllers/admin/OrdersController');

router.get('/', OrdersController.renderOrdersPage);
router.get('/new-order', OrdersController.renderNewOrder);

module.exports = router;