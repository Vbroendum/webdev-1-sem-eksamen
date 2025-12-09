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

// RENDER - Viser formular til oprettelse af ny virksomhed
exports.renderCreateCompanyForm = (req, res) => {
    res.render('admin/Companies/new-company', {
        title: 'Opret ny bruger'
    });
}

// CREATE - Opretter en ny virksomhed
exports.createCompany = async (req, res) => {
    try {
        const { name, cvr } = req.body;
        await db.company.create({ name, cvr });
        res.redirect('/companies');
    } catch (error) {
        console.error('Fejl ved oprettelse af virksomhed:', error);
        res.status(500).send('Databasefejl');
    }
};
// RENDER - Viser formular til redigering af en virksomhed
exports.renderEditCompany = async (req, res) => {
    try {
        const company = await db.company.findByPk(req.params.id, {
            attributes: ['id', 'name', 'cvr']
        });

        if (!company) {
            return res.status(404).send('virksomhed ikke fundet');
        }

     res.render('admin/companies/edit-company', {
        title: 'Rediger virksomhed',
        company
    });
    } catch (error) {
        console.error('Fejl ved hentning af virksomhed:', error);
        res.status(500).send('Databasefejl');
    }
};

// UPDATE - Opdaterer en eksisterende virksomhed
exports.editCompany = async (req, res) => {
    try {
        const { name, cvr } = req.body;
        await db.company.update(
            { name, cvr },
            { where: { id: req.params.id } }
        );
        res.redirect('/companies');
    } catch (error) {
        console.error('Fejl ved opdatering af virksomhed:', error);
        res.status(500).send('Databasefejl');
    }
};

// DELETE - Sletter en virksomhed
exports.deleteCompany = async (req, res) => {
    try {
       const company = await db.company.findByPk(req.params.id, {
            attributes: ['id', 'name', 'cvr']
        });

        if (!company) {
            return res.status(404).send('virksomhed ikke fundet');
        }
        
        await db.company.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/companies');
    } catch (error) {
        console.error('Fejl ved sletning af virksomhed:', error);
        res.status(500).send('Databasefejl');
    }
};
