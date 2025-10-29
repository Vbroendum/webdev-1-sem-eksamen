class DashboardController {
    static renderDashboard(req, res) {
        const buttons = [
            { text: 'Brugere', link: '/users' },
            { text: 'Service Plan', link: '/serviceplan' },
            { text: 'Brugeroversigt', link: '/users' },
            { text: 'Produkter', link: '/products' },
        ];
        res.render('dashboard-admin', { title: 'Dashboard', buttons });
    }
}

module.exports = DashboardController;