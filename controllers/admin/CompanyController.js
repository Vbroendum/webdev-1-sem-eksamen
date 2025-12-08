// CompanyController.js
const db = require('../../models');

// READ - Viser alle virksomheder
exports.renderCompanies = async (req, res) => {
  try {
    const companies = await db.company.findAll({
      attributes: ['id', 'name', 'cvr']
    });

    res.render('admin/companies/companies', {
      title: 'Virksomheder',
      companies
    });
  } catch (error) {
    console.error('Fejl ved hentning af virksomheder:', error);
    res.status(500).send('Databasefejl');
  }
};
