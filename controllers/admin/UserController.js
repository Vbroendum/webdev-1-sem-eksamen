const db = require('../../models/index');
const { User } = require('../../models');

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

exports.renderNewUser = async (req, res) => {
    try {
        res.render('admin/users/new-user', {
            title: 'Ny Bruger'
        });
    } catch (error) {
        console.error('Fejl:', error);
        res.status(500).send('Der opstod en fejl.');
    }
};

exports.createUser = async (req, res) => {
    try {
        console.log('Request body:', req.body);

        const userData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            user_email: req.body.user_email,
            user_password: req.body.user_password,
            role_id: req.body.role_id ? 1 : 2
        };

        console.log('User data to be created:', userData);
        
        await userModel.CreateUser(userData); 
        res.redirect('/users');
    } catch (error) {
        console.error('Fejl ved oprettelse af bruger:', error);
        res.status(500).send('Der opstod en fejl ved oprettelse af bruger.');
    }
};