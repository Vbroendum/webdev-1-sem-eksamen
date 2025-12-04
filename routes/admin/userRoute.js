const express = require('express');
const router = express.Router();
const UsersController = require('../../controllers/admin/UserController');

// READ - viser liste over brugere
router.get('/', UsersController.renderUsers);

router.get('/new-user', UsersController.renderNewUser);

// POST - opret ny bruger
router.post('/', UsersController.createUser);

module.exports = router;