const express = require('express')
const app = express()
const react_views = require('express-react-views');
const config = require('./config.js');
const routes = require('./routes');
const site_name = config.site_name;

app.set('view engine', 'jsx');
app.engine('jsx', react_views.createEngine());

app.get('/', routes.index);

app.listen(config.listen_port, config.listen_ip, () => {
    console.log(`${site_name} успешно запущен по адресу http://${config.listen_ip}:${config.listen_port}`);
});