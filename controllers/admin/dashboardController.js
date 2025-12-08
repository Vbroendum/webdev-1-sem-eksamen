exports.renderDashboard = (req, res) => {
    const buttons = [
        { text: 'Brugere', link: '/users' },
        { text: 'Produkt', link: '/products' },
        { text: 'Station', link: '/stations' },
        { text: 'Ordrer', link: '/orders' },
        { text: 'Virksomheder', link: '/companies' }
    ];
    res.render('admin/dashboard-admin', { title: 'Dashboard', buttons });
};