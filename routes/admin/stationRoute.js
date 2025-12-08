// stationRoute.js
const express = require('express');
const router = express.Router();
const StationController = require('../../controllers/admin/StationController');

// GET - Viser alle stationer
router.get('/', StationController.renderStations);

module.exports = router;
