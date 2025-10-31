class HistorikController {
    static renderHistorik(req, rest) {
        const buttons = [
            { text: 'Admin', link: '/dashboard' },
            { text: 'RengUser', link: '/serviceplan' },
        ];
        rest.render('admin/historik', { title: 'Historik side', buttons }); 
    }
}

module.exports = HistorikController;