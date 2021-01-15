const ip = require('ip').address();
const listen_port = 3300;
const layout = "layout";
const site_name = "RPi Home";
const path = require('path');
const app_path = path.resolve(__dirname);

module.exports.listen_ip = ip;
module.exports.listen_port = listen_port;
module.exports.layout_config = {
    "layout": `${app_path}/views/${layout}.jsx`
};
module.exports.site_name = site_name;