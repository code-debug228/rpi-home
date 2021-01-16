const config = require('../config.js');

function index(req, res) {
    res.render('index', {title: 'Главная', config: config});
};

module.exports.index = index;