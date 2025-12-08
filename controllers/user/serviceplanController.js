const db = require('../../models');
// model import her - ikke lavet endnu

exports.renderServicePlan = (req, res) => {
    res.render('serviceplan', { title: 'ServicePlan' });
}