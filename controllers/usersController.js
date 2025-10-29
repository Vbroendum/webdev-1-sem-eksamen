class UsersController {
    static renderUsers(req, res) {
        res.render('users', { title: 'Users' });
    }
}

export default UsersController;