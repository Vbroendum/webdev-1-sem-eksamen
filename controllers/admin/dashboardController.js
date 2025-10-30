class DashboardController {
    static renderDashboard(req, res) {
        const buttons = [
            { text: 'Brugere', link: '/users' },
            { text: 'Ordrer', link: '/orders' },
            { text: 'Stationer', link: '/stations' },
            { text: 'Produkter', link: '/products' },
        ];
        res.render('admin/dashboard-admin', { title: 'Dashboard', buttons });
    }
}

module.exports = DashboardController;