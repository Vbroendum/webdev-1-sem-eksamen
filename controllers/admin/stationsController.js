class StationsController {
    static renderStations(req, res) {
        res.render('admin/stations/stations', { title: 'Stations' });
    }
}

module.exports = StationsController;