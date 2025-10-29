const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/dashboardController');
const ServicePlanController = require('../controllers/serviceplanController');


// Route for dashboard
router.get('/', DashboardController.renderDashboard);

// Route for service plan
router.get('/serviceplan', ServicePlanController.renderServicePlan);

router.get('/products', (req, res) => {
    res.render('products', { title: 'Products' });
});

router.get('/users', (req, res) => {
    res.render('users', { title: 'Users' });
});

module.exports = router;