const express = require('express')
const app = express();
const tl = require('express-tl');
const config = require('./config.js');
const routes = require('./routes');
const site_name = config.site_name;

app.set('views', config.views_folder);
app.engine('tl', tl);
app.set('view engine', 'tl');
app.use('/static', express.static(config.files_folder));

app.get('/', routes.index);

app.listen(config.listen_port, config.listen_ip, () => {
    console.log(`${site_name} успешно запущен по адресу http://${config.listen_ip}:${config.listen_port}`);
});