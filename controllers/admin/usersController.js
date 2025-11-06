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

    static renderNewUser(req, res) {
        res.render('admin/users/new-user', {
            title: 'Opret ny bruger'
        })
       }
}

module.exports = UsersController;