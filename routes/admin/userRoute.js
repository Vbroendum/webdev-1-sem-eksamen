const express = require('express');
const router = express.Router();
const UsersController = require('../../controllers/admin/UserController');

// READ - viser liste over brugere
router.get('/', UsersController.renderUsers);

router.get('/new-user', UsersController.renderNewUser);

// POST - opret ny bruger
router.post('/', UsersController.createUser);

// GET - vis redigeringsformular for en bruger
router.get('/edit/:id', UsersController.renderEditUser);

// POST - opdater bruger
router.post('/:id/edit', UsersController.updateUser);

// POST - sletter bruger
router.post('/:id/delete', UsersController.deleteUser);


module.exports = router;