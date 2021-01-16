const config = require('../config.js');

function index(req, res) {
    res.render('index', {title: 'Главная'});
};

module.exports.index = index;