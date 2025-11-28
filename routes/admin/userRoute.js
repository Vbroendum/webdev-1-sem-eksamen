const express = require('express');
const router = express.Router();
const UsersController = require('../../controllers/admin/userController');

// READ - viser liste over brugere
router.get('/', UsersController.renderUsers);

router.get('/new-user', UsersController.renderNewUser);

// POST - opret ny bruger
router.post('/', UsersController.createUser);

// GET - vis redigeringsformular for en bruger
router.get('/edit/:id', UsersController.renderEditUser);

// POST - opdater bruger
router.post('/edit/:id', UsersController.updateUser);


module.exports = router;