const db = require('../../config/database');
const userModel = require('../../models/admin/usersModel');

exports.renderUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.render('admin/users/users', {
            title: 'Brugeroversigt',
            items: users,
            fields: ['name', 'user_email', 'role']
        });
        console.log('users:', users);
    } catch (error) {
        console.error('Fejl:', error);
        res.status(500).send('Der opstod en fejl ved hentning af brugere.');
    }
};

exports.renderNewUser = (req, res) => {
    res.render('admin/users/newUser', { title: 'Opret ny bruger' });
};
