const db = require('../../config/database');
const userModel = require('../../models/admin/usersModel');

// READ - Viser alle brugere
exports.renderUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.render('admin/users/users', {
            title: 'Brugeroversigt',
            items: users,
            fields: ['name', 'user_email', 'role']
        });

    } catch (error) {
        console.error('Fejl:', error);
        res.status(500).send('Der opstod en fejl ved hentning af brugere.');
    }
};

// READ - Vis oprettelsesformular
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

// CREATE - Opretter ny bruger
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

// READ - Vis redigeringsform
exports.renderEditUser = async (req, res) => {
    try {
        const user = await userModel.findUserById(req.params.id);

        if (!user) {
            return res.status(404).render('error', { message: 'Bruger ikke fundet' });
        }

        res.render('admin/users/edit-user', {
            title: 'Rediger brugeroplysninger',
            user
        })

    } catch(error) {
        console.error('Fejl ved redigering af brugeroplysninger', error);
        res.status(500).send('Der opstod en fejl ved redigering af brugeroplysninger')
    }
};

// UPDATE - Opdatere brugeroplysninger
exports.updateUser = async (req, res) => {
    try {
        await userModel.updateUser(req.params.id, req.body);
        res.redirect('/users');
    } catch(error) {
        console.error('Fejl ved opdatering af bruger:', error);
        res.status(500).send('Der opstod en fejl ved opdatering af bruger');
    }
}