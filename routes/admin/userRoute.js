// userRoute.js
const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/admin/UserController');

// GET - viser alle brugere
router.get('/', UserController.renderUsers);

// GET - viser formular til oprettelse af ny bruger
router.get('/new-user', UserController.renderCreateUserForm);

// GET - Edit bruger
router.get('/edit-user/:id', UserController.renderEditUser);

// POST - Delete bruger
router.delete('/:id', UserController.deleteUser);

// POST - opretter en ny bruger
router.post('/', UserController.createUser);

// POST - opdaterer en eksisterende bruger
router.post('/:id/edit-user', UserController.editUser);
module.exports = router;
