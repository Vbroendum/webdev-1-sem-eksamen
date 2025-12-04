const express = require('express');
const router = express.Router();
const StationsController = require('../../controllers/admin/StationController');

router.get('/', StationsController.renderStations);

router.get('/new-station', StationsController.renderNewStation);

module.exports = router;