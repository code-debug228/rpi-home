const config = require('../config.js');

function index(req, res) {
    res.render('index', {title: 'Express'});
};

module.exports.index = index;