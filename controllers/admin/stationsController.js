class stationsController {
    static renderStationsPage(req, res) {
        res.render('admin/stations/stations', { title: 'Stationer' });
    }
}

module.exports = stationsController;