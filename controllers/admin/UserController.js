const userModel = require('../../models/admin/usersModel');


// READ - Viser alle brugere i listen
exports.renderUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.render('admin/users/users', {
            title: 'Brugeroversigt',
            items: users, // Users trækkes fra model laget
            fields: ['first_name', 'user_email', 'role_id'], // De felter der skal vises i listen
            editUrl: '/edit-user', // Sti til at redigere, så den kan anvendes dynamisk i lists.hbs
        });

        } catch (error) {
            console.error('Fejl:', error);
            res.status(500).send('Der opstod en fejl ved hentning af brugere.');
        }
};

// CREATE - Opretter ny bruger
exports.renderNewUser = (req, res) => {
    res.render('admin/users/new-user', { 
        title: 'Opret ny bruger' });
};


// UPDATE - Opdatere bruger
exports.renderEditUser = (req, res) => {
    res.render('admin/users/edit-user', { 
        title: 'Rediger bruger' });
};

// DELETE - Sletter bruger
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
