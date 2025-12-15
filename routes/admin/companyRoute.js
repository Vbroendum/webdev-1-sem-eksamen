// companyRoute.js
const express = require('express');
const router = express.Router();
const CompanyController = require('../../controllers/admin/CompanyController');

// GET - Viser alle virksomheder
router.get('/', CompanyController.renderCompanies);

// GET - viser formular til oprettelse af ny virksomhed
router.get('/new-company', CompanyController.renderCreateCompanyForm);

// // GET - Edit virksomhed
router.get('/edit-Company/:id', CompanyController.renderEditCompany);

// // POST - Delete virksomhed
router.delete('/:id', CompanyController.deleteCompany);

// // POST - opretter en ny virksomhed
router.post('/', CompanyController.createCompany);

// // POST - opdaterer en eksisterende virksomhed
router.post('/:id/edit-company', CompanyController.editCompany);

module.exports = router;