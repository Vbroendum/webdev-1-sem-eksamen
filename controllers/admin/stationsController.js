class StationsController {
    static renderStations(req, res) {
        res.render('admin/stations/stations', { title: 'Stations' });
    }
}

const { Station } = require('../../models');

exports.index = (req, res) => {
    res.render('admin/stations/stations', {
        title: 'Stations',
        message: 'Station list will be displayed here.',
    });
};

// Hent alle stationer
exports.getAllStations = async (req, res) => {
    try {
        const stations = await Station.findAll();
        res.json(stations);
    } catch (error) {
        console.error('Error fetching stations:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Hent en station
exports.getStationById = async (req, res) => {
    try {
        const { id } = req.params;
        const station = await Station.findByPk(id);
        if (!station) return res.status(404).json({ error: 'Station not found' });
        res.json(station);
    } catch (error) {
        console.error('Error fetching station:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Opret station
exports.createStation = async (req, res) => {
    try {
        const { name, address } = req.body;
        const newStation = await Station.create({ name, address });
        res.status(201).json(newStation);
    } catch (error) {
        console.error('Error creating station:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Opdater station
exports.updateStation = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address } = req.body;
        const station = await Station.findByPk(id);
        if (!station) return res.status(404).json({ error: 'Station not found' });
        await station.update({ name, address });
        res.json(station);
    } catch (error) {
        console.error('Error updating station:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Slet station
exports.deleteStation = async (req, res) => {
    try {
        const { id } = req.params;
        const station = await Station.findByPk(id);
        if (!station) return res.status(404).json({ error: 'Station not found' });
        await station.destroy();
        res.json({ message: 'Station deleted successfully' });
    } catch (error) {
        console.error('Error deleting station:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = StationsController;