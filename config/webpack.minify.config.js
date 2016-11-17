var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins = [ new webpack.optimize.UglifyJsPlugin() ];
module.exports = config;