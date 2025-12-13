// stationRoute.js
const express = require('express');
const router = express.Router();
const StationController = require('../../controllers/admin/StationController');

// GET - Viser alle stationer
router.get('/', StationController.renderStations);

// GET - viser formular til oprettelse af ny station
router.get('/new-station', StationController.renderCreateStationForm);

// GET - Edit station
router.get('/edit-station/:id', StationController.renderEditStation);

// DELETE - Delete station
router.delete('/:id', StationController.deleteStation);

// POST - opretter en ny station
router.post('/', StationController.createStation);

// POST - opdaterer en eksisterende station
router.post('/:id/edit-station', StationController.editStation);

module.exports = router;
