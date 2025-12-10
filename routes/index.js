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
const { isNotAuthenticated, isAuthenticated, isAdmin, isRengUser } = require('../middleware/auth');

// Route for Login
router.get('/', isNotAuthenticated, LoginController.renderLogin);
router.post('/', isNotAuthenticated, LoginController.login);

// Base routes (home, error-test)
const baseRoute = require('./baseRoute');
router.use('/', baseRoute);

// Route for dashboard
router.get('/dashboard', isAdmin, DashboardController.renderDashboard);

// Route for service plan
router.get('/serviceplan', isRengUser, ServiceplanController.renderServiceplans);

router.get('/historik', isAuthenticated, HistorikController.renderHistorik);

router.use('/users', isAdmin, usersRoutes);
router.use('/products', isAdmin, productsRoutes);
router.use('/orders', isAdmin, ordersRoutes);
router.use('/stations', isAdmin, stationsRoutes);
router.use('/companies', isAdmin, companiesRoutes);
module.exports = router;