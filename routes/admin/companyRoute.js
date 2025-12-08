// companyRoute.js
const express = require('express');
const router = express.Router();
const CompanyController = require('../../controllers/admin/CompanyController');

// GET - Viser alle virksomheder
router.get('/', CompanyController.renderCompanies);

module.exports = router;