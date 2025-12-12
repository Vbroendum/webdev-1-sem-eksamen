// index.js
const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController');
const DashboardController = require('../controllers/admin/DashboardController');
const ServiceplanController = require('../controllers/user/serviceplanController');
const HistorikController = require('../controllers/HistorikController');
const upload = require('../middleware/multer');

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

router.post('/logout', isAuthenticated, LoginController.logout);

// Route for dashboard
router.get('/dashboard', isAdmin, DashboardController.renderDashboard);

// Route for service plan
router.get('/serviceplan', isRengUser, ServiceplanController.renderServiceplans);
router.post('/serviceplan/accept/:id', isRengUser, ServiceplanController.acceptServiceplan);
router.get('/serviceplan/:id', isRengUser, ServiceplanController.renderServiceplanForm);
router.post('/serviceplan/:id', isRengUser, upload.fields([
  { name: 'before_image', maxCount: 10 },
  { name: 'after_image', maxCount: 10 }
]), ServiceplanController.submitServiceplanForm);



router.get('/historik', isAuthenticated, HistorikController.renderHistorik);

router.use('/users', isAdmin, usersRoutes);
router.use('/products', isAdmin, productsRoutes);
router.use('/orders', isAdmin, ordersRoutes);
router.use('/stations', isAdmin, stationsRoutes);
router.use('/companies', isAdmin, companiesRoutes);
module.exports = router;