const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginControlleroginController');
const DashboardController = require('../controllers/admin/DashboardController');
const ServicePlanController = require('../controllers/user/ServiceplanController');
const HistorikController = require('../controllers/HistorikController');

// importering af routes
const usersRoutes = require('./admin/userRoute');
const productsRoutes = require('./admin/productRoute');
const ordersRoutes = require('./admin/orderRoute');
const stationsRoutes = require('./admin/stationRoute');

// Route for Login
router.get('/', LoginController.renderLogin);

// Route for dashboard
router.get('/dashboard', DashboardController.renderDashboard);

// Route for service plan
router.get('/serviceplan', ServicePlanController.renderServicePlan);

router.get('/historik', HistorikController.renderHistorik);

router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);
router.use('/stations', stationsRoutes);

module.exports = router;