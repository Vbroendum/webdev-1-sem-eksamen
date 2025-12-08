// orderRoute.js
const express = require('express');
const router = express.Router();
const OrderController = require('../../controllers/admin/OrderController');

// GET - Viser alle ordre
router.get('/', OrderController.renderOrders);

module.exports = router;
