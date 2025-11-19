const db = require('../../config/database');
const userModel = require('../../models/admin/usersModel');

exports.renderUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.render('admin/users/users', {
            title: 'Brugeroversigt',
            items: users,
            fields: ['first_name', 'user_email', 'role_id'],
            editUrl: '/edit-user',
        });
        console.log('users:', users);
    } catch (error) {
        console.error('Fejl:', error);
        res.status(500).send('Der opstod en fejl ved hentning af brugere.');
    }
};

exports.renderNewUser = (req, res) => {
    res.render('admin/users/new-user', { title: 'Opret ny bruger' });
};

exports.renderEditUser = (req, res) => {
    res.render('admin/users/edit-user', { title: 'Rediger bruger' });
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        await userModel.deleteUserById(userId);
        res.redirect('admin/users');
    } catch(error) {
        console.error('Fejl', error);
        res.status(500).send('Kunne ikke slette bruger');
    }
}
