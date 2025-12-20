exports.renderDashboard = (req, res) => {
    const buttons = [
        { text: "Brugere", link: "/users", icon: "user" },
        { text: "Produkter", link: "/products", icon: "shopping-cart" },
        { text: "Stationer", link: "/stations", icon: "fuel" },
        { text: "Ordrer", link: "/orders", icon: "layout-list" },
        { text: "Virksomheder",link: "/companies",icon: "building-2" }
    ];

    res.render('admin/dashboard-admin', { title: 'Dashboard', buttons });
};