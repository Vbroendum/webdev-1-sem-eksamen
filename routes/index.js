const express = require('express');
const router = express.Router();
const path = require('path');
const DashboardController = require('../controllers/admin/dashboardController');
const ServicePlanController = require('../controllers/user/serviceplanController');
const UsersController = require('../controllers/admin/userController');
const LoginController = require('../controllers/loginController');
const ProductsController = require('../controllers/admin/productsController');
const OrdersController = require('../controllers/admin/ordersController');
const StationsController = require('../controllers/admin/stationsController');
const HistorikController = require('../controllers/historikController');

// Route for Login
router.get('/', LoginController.renderLogin);

// Route for dashboard
router.get('/dashboard', DashboardController.renderDashboard);

// Route for service plan
router.get('/serviceplan', ServicePlanController.renderServicePlan);

router.get('/stations', StationsController.renderStations);

// Route for brugeroversigt
router.get('/brugeroversigt', UsersController.renderUsers);

router.get('/products', ProductsController.renderProductsPage);

router.get('/orders', OrdersController.renderOrdersPage);

// READ - viser liste over brugere
router.get('/users', UsersController.renderUsers);

router.get('/historik', HistorikController.renderHistorik);

//new pages
router.get('/new-order', OrdersController.renderNewOrder);

router.get('/new-product', ProductsController.renderNewProduct);

router.get('/new-station', StationsController.renderNewStation);

router.get('/new-user', UsersController.renderNewUser);

module.exports = router;