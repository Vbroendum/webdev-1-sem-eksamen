// index.js
const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController');
const DashboardController = require('../controllers/admin/DashboardController');
const ServiceplanController = require('../controllers/user/ServiceplanController');
const HistorikController = require('../controllers/HistorikController');

// importering af routes
const usersRoutes = require('./admin/userRoute');
const productsRoutes = require('./admin/productRoute');
const ordersRoutes = require('./admin/orderRoute');
const stationsRoutes = require('./admin/stationRoute');
const companiesRoutes = require('./admin/companyRoute')
const { isNotAuthenticated } = require('../middleware/auth');

// Route for Login
router.get('/', isNotAuthenticated, LoginController.renderLogin);

// Route for dashboard
router.get('/dashboard', DashboardController.renderDashboard);

// Route for service plan
router.get('/serviceplan', ServiceplanController.renderServiceplans);

router.get('/historik', HistorikController.renderHistorik);

router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);
router.use('/stations', stationsRoutes);
router.use('/companies', companiesRoutes);

module.exports = router;