const stationsModel = require('../../models/admin/stationsModel');

// READ - Viser alle stationer
exports.renderStations = async (req, res) => {
    try {
        const stations = await stationsModel.getAllStations();
        res.render('admin/stations/stations', { 
            title: 'Stationsoversigt', 
            items: stations,
            fields: ['station_name', 'station_address']
            });

        } catch (error) {
            console.error('Fejl:', error);
            res.status(500).send('Der opstod en fejl ved hentning af stationer.');
        };
};

// CREATE - Viser view til at oprette ny station
exports.renderNewStation = async (req, res) => {
    try {
        const newStation = await stationsModel.createStation();
        res.render('admin/stations/new-station', {
            title: 'Opret ny station'
        });

    } catch(error) {
        console.error('Fejl:', error);
        res.status(500).send('Der opstod en fejl ved oprettelse af station');
    };
};

// UPDATE - Viser view til at opdatere station
exports.renderEditStation = async (req, res) => {
    try {
        const updateStation = await stationsModel.updateStation();
        res.render('admin/stations/edit-station', {
            title: 'Opdater station'
        });

    } catch (error) {
        console.error('Fejl', error);
        res.status(500).send('Der opstod en fejl ved opdatering af station');
    };
};



