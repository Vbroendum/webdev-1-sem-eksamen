// StationController.js
const db = require('../../models');

// READ - Viser alle stationer
exports.renderStations = async (req, res) => {
    try {
        const stations = await db.station.findAll({
            attributes: ['station_name']
        });

        res.render('admin/stations/stations', {
            title: 'Stationer',
            stations
        });

        } catch (error) {
            console.error('Fejl ved hentning af stationer:', error);
            res.status(500).send('Databasefejl');
        }
    };
