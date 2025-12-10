// StationController.js
const db = require('../../models');


// READ - Viser alle stationer
exports.renderStations = async (req, res) => {
    try {
        const stations = await db.station.findAll({
            attributes: [
                'id',
                'station_name',
                'station_address',
                'station_has_bay',
                'station_postal_code',
                'company_id'
            ]
        });

        res.render('admin/stations/stations', {
            title: 'Stationer',
            items: stations,
            fields: ['station_name', 'station_address'],
            editUrl: '/stations/edit-station',
            deleteUrl: '/stations'
        });

    } catch (error) {
        console.error('Fejl ved hentning af stationer:', error);
        res.status(500).send('Databasefejl');
    }
};


// RENDER - Viser formular til oprettelse af ny Station
exports.renderCreateStationForm = async (req, res) => {
    try {
        const companies = await db.company.findAll({
            attributes: ['id', 'name']
        });

        res.render('admin/stations/new-station', {
            title: 'Opret ny station',
            companies
        });

    } catch (error) {
        console.error('Fejl ved hentning af firmaer:', error);
        res.status(500).send('Databasefejl');
    }
};


// CREATE - Opretter en ny station
exports.createStation = async (req, res) => {
    try {
        const {
            station_name,
            station_address,
            station_has_bay,
            station_postal_code,
            company_id
        } = req.body;

        await db.station.create({
            station_name,
            station_address,
            station_has_bay: station_has_bay === 'on',
            station_postal_code: parseInt(station_postal_code),
            company_id: parseInt(company_id)
        });

        res.redirect('/stations');

    } catch (error) {
        console.error('Fejl ved opretelse af station', error);
        res.status(500).send('Databasefejl');
    }
};

// RENDER - Viser formular til redigering af en station
exports.renderEditStation = async (req, res) => {
    try {
        const station = await db.station.findByPk(req.params.id, {
            attributes: [
                'id',
                'station_name',
                'station_address',
                'station_has_bay',
                'station_postal_code',
                'company_id'
            ]
        });

        if (!station) {
            return res.status(404).send('Station ikke fundet');
        }

        const companies = await db.company.findAll({
            attributes: ['id', 'name']
        });

        res.render('admin/stations/edit-station', {
            title: 'Rediger Station',
            station,
            companies
        });

    } catch (error) {
        console.error('Fejl ved hentning af station:', error);
        res.status(500).send(error.message);
    }
};


// UPDATE - Opdaterer en eksisterende station
exports.editStation = async (req, res) => {
    try {
        const {
            station_name,
            station_address,
            station_has_bay,
            station_postal_code,
            company_id
        } = req.body;

        await db.station.update(
            {
                station_name,
                station_address,
                station_has_bay: station_has_bay === 'on',
                station_postal_code: parseInt(station_postal_code),
                company_id: parseInt(company_id)
            },
            { where: { id: req.params.id } }
        );

        res.redirect('/stations');

    } catch (error) {
        console.error('Fejl ved opdatering af station:', error);
        res.status(500).send('Databasefejl');
    }
};


// DELETE - Sletter en station
exports.deleteStation = async (req, res) => {
    try {
        const station = await db.station.findByPk(req.params.id);

        if (!station) {
            return res.status(404).send('Station ikke fundet');
        }

        await db.station.destroy({
            where: { id: req.params.id }
        });

        res.redirect('/stations');

    } catch (error) {
        console.error('Fejl ved sletning af station:', error);
        res.status(500).send('Databasefejl');
    }
};
