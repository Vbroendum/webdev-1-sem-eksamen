const express = require('express');
const router = express.Router();
const path = require('path');
const DashboardController = require('../controllers/dashboardController');
const ServicePlanController = require('../controllers/user/serviceplanController');

// Midlertidig database
const getUsers = [
    { "id": 1, "name": "Alice", "role": "admin" },
    { "id": 2, "name": "Bob", "role": "user" }
  ]


// Route for dashboard
router.get('/', DashboardController.renderDashboard);

// Route for service plan
router.get('/serviceplan', ServicePlanController.renderServicePlan);

router.get('/products', (req, res) => {
    res.render('products', { title: 'Products' });
});

// READ - viser liste over brugere
router.get('/users', (req, res) => {

    res.render('partials/list', { title: 'Brugeroversigt', users: getUsers });
});


module.exports = router;