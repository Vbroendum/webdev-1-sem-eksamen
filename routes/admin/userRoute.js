// userRoute.js
const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/admin/UserController');

// GET - viser alle brugere
router.get('/', UserController.renderUsers);

module.exports = router;
