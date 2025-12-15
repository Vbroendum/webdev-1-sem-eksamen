// orderRoute.js
const express = require('express');
const router = express.Router();
const OrderController = require('../../controllers/admin/OrderController');

// GET - Viser alle ordre
router.get('/', OrderController.renderOrders);
router.get('/new-order', OrderController.renderCreateOrder);
router.get('/edit-order/:id', OrderController.renderEditOrder);

// POST - Opret ny ordre
router.post('/', OrderController.createOrder);

// POST - Opdater eksisterende ordre
router.post('/:id/edit', OrderController.updateOrder);

// DELETE - Slet en ordre
router.delete('/:id', OrderController.deleteOrder);
module.exports = router;
