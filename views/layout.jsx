var react = require('react');
var config = require('../config.js');

function layout(properties) {
  return (
    <html>
      <head>
        <title>config.site_name + {properties.title} !== null ? (' ' + {properties.title}) : ''</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}

module.exports = layout;