class UsersController {
    static renderUsers(req, res) {
        res.render('/admin/users/users', { title: 'Users' });
    }
}

export default UsersController;