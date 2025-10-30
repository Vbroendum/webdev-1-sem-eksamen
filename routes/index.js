const express = require('express');
const router = express.Router();
const path = require('path');
const DashboardController = require('../controllers/admin/dashboardController');
const ServicePlanController = require('../controllers/user/serviceplanController');
const UsersController = require('../controllers/admin/usersController')

// Midlertidig database
const getUsers = [
    { "id": 1, "name": "Alice", "role": "admin" },
    { "id": 2, "name": "Bob", "role": "user" }
  ]


// Route for dashboard
router.get('/', DashboardController.renderDashboard);

// Route for service plan
router.get('/serviceplan', ServicePlanController.renderServicePlan);

// Route for brugeroversigt
router.get('/brugeroversigt', UsersController.renderUsersController);

router.get('/products', (req, res) => {
    res.render('admin/products/products', { title: 'Products' });
});

router.get('/orders', (req, res) => {
    res.render('admin/orders/orders', { title: 'Orders' });
});

// READ - viser liste over brugere
router.get('/users', (req, res) => {

    res.render('partials/list', { title: 'Brugeroversigt', users: getUsers });
});


module.exports = router;