class StationsController {
    static renderStations(req, res) {
        const stations = [
            { "id": 1, "pName": "Salt", 'unit': 'l'},
            { "id": 2, "pName": "Citronsyre", 'unit': 'kg'}
        ];

        res.render('admin/stations/stations', { 
            title: 'Stationsoversigt', 
            items: stations,
            fields: ['pName', 'unit']
         });
    }
}

module.exports = StationsController;