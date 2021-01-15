const react = require('react');
const config = require('../config.js');
const proptypes = require('prop-types');

function layout(properties){
    return (
        <html>
        <head>
            <title>{properties.title}</title>
        </head>
        <body>
            {properties.title}
        </body>
        </html>
    );
}

layout.propTypes = {
    title: proptypes.string,
};

module.exports = layout;