const db = require('../../config/database');

class UsersController {
    static async renderUsers(req, res) {
        
        /* // Midlertidig database
        const users = [
            { "id": 1, "name": "Alice", 'email': 'hej@gmail.com', "role": "admin" },
            { "id": 2, "name": "Bob", 'email': 'hej2@gmail.com', "role": "user" }
        ]
        res.render('admin/users/users', { 
            title: 'Brugeroversigt', 
            items: users,
            fields: ['name', 'email', 'role']
         }); */

        // Hent brugere fra den rigtige database med SQL query
        // CONCAT bruges til at kombinere first_name og last_name til et fuldt navn
        try {
            const [users] = await db.query(`
                SELECT 
                    user_id,
                    CONCAT(first_name, ' ', last_name) AS name,
                    user_email,
                    role_id
                FROM users
            `);
            console.log(users);
            
            // giv rolle navne baseret på role_id
            users.forEach(user => {
                if (user.role_id === 1) {
                    user.role = 'Admin';
                } else {
                    user.role = 'Rengøringspersonale';
                }
            });
            
            res.render('admin/users/users', { 
                title: 'Brugeroversigt', 
                items: users,
                fields: ['name', 'user_email', 'role']
            });
            
        } catch (error) {
            console.error('Fejl ved hentning af brugere fra databasen:', error);
            res.status(500).send('Der opstod en fejl ved hentning af brugere.');
        }

    }

    static renderNewUser(req, res) {
        res.render('admin/users/new-user', {
            title: 'Opret ny bruger'
        })
       }
}

module.exports = UsersController;