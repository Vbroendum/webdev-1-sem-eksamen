class ServicePlanController {
    static renderServicePlan(req, res) {
        res.render('serviceplan', { title: 'Service Plan' });
    }
}

module.exports = ServicePlanController;