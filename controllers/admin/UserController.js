const db = require('../../models');
const { User } = require('../../models');

exports.renderUsers = async (req, res) => {
    try {
        const users = await db.User.findAll({
            title: 'Brugeroversigt',
            items: users,
            fields: ['name', 'user_email', 'role']
        });
        res.render('admin/users.hbs', { users });
    } catch (error) {
        console.error("Fejl ved hentning af brugere:", error);
        res.status(500).send("Der opstod en fejl under indlæsningen af brugere.");
    }
};

exports.renderNewUser = async (req, res) => {
    try {
        const users = await db.User.findAll({
            title: 'Ny Bruger'
        });
        res.render('admin/users.hbs', { users });
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