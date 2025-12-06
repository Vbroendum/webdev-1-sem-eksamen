const db = require('../../models/index');
// model import her - ikke lavet endnu

exports.renderServicePlan = (req, res) => {
    res.render('/serviceplan', { title: 'Service Plan' });
}