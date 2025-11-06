class UsersController {
    static renderUsers(req, res) {
        // Midlertidig database
        const users = [
            { "id": 1, "name": "Alice", 'email': 'hej@gmail.com', "role": "admin" },
            { "id": 2, "name": "Bob", 'email': 'hej2@gmail.com', "role": "user" }
        ]
        res.render('admin/users/users', { 
            title: 'Brugeroversigt', 
            items: users,
            fields: ['name', 'email', 'role']
         });
    }
}

module.exports = UsersController;