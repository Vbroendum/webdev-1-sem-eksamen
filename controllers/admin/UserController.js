// UserController.js
const db = require('../../models');

// READ - Viser alle brugere
exports.renderUsers = async (req, res) => {
    try {
        const users = await db.user.findAll({
            attributes: ['id', 'first_name', 'last_name', 'user_email', 'role_id']
        });

        users.forEach(user => {
            user.role_id = user.role_id === 1 ? 'Admin' : 'Rengøringspersonale';
          });

        res.render('admin/users/users', {
            title: 'Brugeroversigt',
            items: users,
            fields: ['first_name', 'user_email', 'role_id'],
            editUrl: '/users/edit-user',
            deleteUrl: '/users'
        });

        } catch (error) {
            console.error('Fejl ved hentning af brugere:', error);
            res.status(500).send('Databasefejl');
        }
};
// RENDER - Viser formular til oprettelse af ny bruger
exports.renderCreateUserForm = (req, res) => {
    res.render('admin/users/new-user', {
        title: 'Opret ny bruger'
    });
}

// CREATE - Opretter en ny bruger
exports.createUser = async (req, res) => {
    try {
        const { first_name, last_name, user_email, user_password, role_id } = req.body;
        await db.user.create({ first_name, last_name, user_email, user_password, role_id });
        res.redirect('/users');
    } catch (error) {
        console.error('Fejl ved oprettelse af bruger:', error);
        res.status(500).send('Databasefejl');
    }
};
// RENDER - Viser formular til redigering af en bruger
exports.renderEditUser = async (req, res) => {
    try {
        const user = await db.user.findByPk(req.params.id, {
            attributes: ['id', 'first_name', 'last_name', 'user_password', 'user_email', 'role_id']
        });

        if (!user) {
            return res.status(404).send('Bruger ikke fundet');
        }

     res.render('admin/users/edit-user', {
        title: 'Rediger bruger',
        user
    });
    } catch (error) {
        console.error('Fejl ved hentning af bruger:', error);
        res.status(500).send('Databasefejl');
    }
};

// UPDATE - Opdaterer en eksisterende bruger
exports.editUser = async (req, res) => {
    try {
        const { first_name, last_name, user_email, user_password, role_id } = req.body;
        await db.user.update(
            { first_name, last_name, user_email, user_password, role_id },
            { where: { id: req.params.id } }
        );
        res.redirect('/users');
    } catch (error) {
        console.error('Fejl ved opdatering af bruger:', error);
        res.status(500).send('Databasefejl');
    }
};

// DELETE - Sletter en bruger
exports.deleteUser = async (req, res) => {
    try {
       const user = await db.user.findByPk(req.params.id, {
            attributes: ['id', 'first_name', 'last_name', 'user_password', 'user_email', 'role_id']
        });

        if (!user) {
            return res.status(404).send('Bruger ikke fundet');
        }
        
        await db.user.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/users');
    } catch (error) {
        console.error('Fejl ved sletning af bruger:', error);
        res.status(500).send('Databasefejl');
    }
};