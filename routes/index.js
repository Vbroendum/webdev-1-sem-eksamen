const express = require('express');
const router = express.Router();
const path = require('path');
const DashboardController = require('../controllers/admin/dashboardController');
const ServicePlanController = require('../controllers/user/serviceplanController');
const UsersController = require('../controllers/admin/usersController')
const LoginController = require('../controllers/loginController');
const ProductsController = require('../controllers/admin/productsController');
const OrdersController = require('../controllers/admin/ordersController');

// Route for Login
router.get('/', LoginController.renderLogin);

// Route for dashboard
router.get('/dashboard', DashboardController.renderDashboard);

// Route for service plan
router.get('/serviceplan', ServicePlanController.renderServicePlan);

// Route for brugeroversigt
router.get('/brugeroversigt', UsersController.renderUsers);

router.get('/products', ProductsController.renderProductsPage);

router.get('/orders', OrdersController.renderOrdersPage);

// READ - viser liste over brugere
router.get('/users', UsersController.renderUsers);

module.exports = router;