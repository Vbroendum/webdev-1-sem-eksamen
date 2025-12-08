// UserController.js
const db = require('../../models');

// READ - Viser alle brugere
exports.renderUsers = async (req, res) => {
    try {
        const users = await db.user.findAll({
            attributes: ['first_name', 'last_name']
        });

        res.render('admin/users/users', {
            title: 'Brugeroversigt',
            users
        });

        } catch (error) {
            console.error('Fejl ved hentning af brugere:', error);
            res.status(500).send('Databasefejl');
        }
};
