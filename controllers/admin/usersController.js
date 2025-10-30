class UsersController {
    static renderUsers(req, res) {
        // Midlertidig database
        const getUsers = [
            { "id": 1, "name": "Alice", "role": "admin" },
            { "id": 2, "name": "Bob", "role": "user" }
        ]
        res.render('admin/users/users', { title: 'Users', users: getUsers });
    }
}

module.exports = UsersController;