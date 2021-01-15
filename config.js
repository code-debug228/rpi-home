const ip = require('ip').address();
const listen_port = 3300;
const layout = "default";
const site_name = "RPi Home";

module.exports.listen_ip = ip;
module.exports.listen_port = listen_port;
module.exports.layout_config = {
    "layout": layout
};
module.exports.site_name = site_name;