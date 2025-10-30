class LoginController {
    static renderLogin(req, res) {
        const buttons = [
            { text: 'Admin', link: '/dashboard' },
            { text: 'RengUser', link: '/serviceplan' },
        ];
        res.render('admin/login', { title: 'Login side', buttons });
    }
}

module.exports = LoginController;