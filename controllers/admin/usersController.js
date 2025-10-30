class UsersController {
    static renderUsersPage(req, res) {
        res.render('/admin/users/users', { title: 'Users' });
    }
}

module.exports = UsersController;