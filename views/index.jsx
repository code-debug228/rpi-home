var react = require('react');
var layout = require('./layout');

function index(properties) {
    console.log(123);
    return (
        <layout>
        <h1>{properties.title}</h1>
        <p>Welcome to {properties.title}</p>
        </layout>
    );
}

module.exports.index = index;