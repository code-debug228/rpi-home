const React = require('react');
const config = require('../config.js');
const layout = require(config.layout_config.layout);
const proptypes = require('prop-types');

function index(properties){
    return (
        <layout title={properties.title}>
            <h1>{properties.title}</h1>
            <p>Welcome to {properties.title}</p>
        </layout>
    );
}

index.propTypes = {
    title: proptypes.string
};

module.exports = index;