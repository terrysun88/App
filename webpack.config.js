var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

var BUILD_DIR = path.resolve(__dirname, 'Web/static/js/');

module.exports = {
  context: __dirname,

  entry: {
    "home": './Web/static/jsx/home.jsx'
  }, 

  output: {
      path: BUILD_DIR,
      filename: "[name].js",
  },

  plugins: [
    new BundleTracker({filename: './Web/webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx']
  },


};