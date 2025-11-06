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

    static renderNewStation(req, res) {
        res.render('admin/stations/new-station', {
            title: 'Opret ny station'
        })
       }
}

module.exports = StationsController;