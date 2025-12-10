class HistorikController {
    static renderHistorik(req, res) {
        const buttons = [
            { text: 'Admin', link: '/dashboard' },
            { text: 'RengUser', link: '/serviceplan' },
        ];
        res.render('admin/historik', { title: 'Historik side', buttons }); 
    }
}

module.exports = HistorikController;