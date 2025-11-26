const express = require('express');
const router = express.Router();
const StationsController = require('../../controllers/admin/stationsController');

router.get('/stations', StationsController.renderStations);

router.get('/new-station', StationsController.renderNewStation);

module.exports = router;