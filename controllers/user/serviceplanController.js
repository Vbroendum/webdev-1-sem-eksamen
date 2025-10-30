class ServicePlanController {
    static renderServicePlan(req, res) {
        res.render('users/serviceplan', { title: 'Service Plan' });
    }
}

module.exports = ServicePlanController;