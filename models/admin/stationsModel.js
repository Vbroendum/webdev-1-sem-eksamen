db = require('../../config/database'); 

// READ - Hent alle stationer 
exports.getAllStations = async () => {
    try {
        const [rows] = await db.query("SELECT * FROM station");
        return rows;

    } catch(error) {
        console.error('Fejl ved hentning af stationer');
        return error;
    }
};

// READ - Hent station med ID 
exports.getStationById = async () => {

};

// CREATE - Opret ny station
exports.createStation = async () => {

};

// UPDATE - Opdater station
exports.updateStation = async () => {

};

// DELETE - Slet station 
exports.deleteStation = async () => {

};