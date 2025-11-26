const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController');
const DashboardController = require('../controllers/admin/dashboardController');
const ServicePlanController = require('../controllers/user/serviceplanController');
const HistorikController = require('../controllers/historikController');

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

//edit pages
router.get('/edit-user', UsersController.renderEditUser);

router.get('/edit-product', ProductsController.renderEditProduct);

router.get('/edit-station', StationsController.renderEditStation);

router.get('/edit/order', OrdersController.renderEditOrder);

//delete routes
router.post('/delete/:id', UsersController.deleteUser);


module.exports = router;