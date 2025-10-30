class DashboardController {
    static renderDashboard(req, res) {
        const buttons = [
            { text: 'Brugere', link: '/users' },
            { text: 'Service Plan', link: '/orders' },
            { text: 'Brugeroversigt', link: '/users' },
            { text: 'Produkter', link: '/products' },
        ];
        res.render('admin/dashboard-admin', { title: 'Dashboard', buttons });
    }
}

module.exports = DashboardController;