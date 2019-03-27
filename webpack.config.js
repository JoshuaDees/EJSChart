// Require webpack
const webpack = require("webpack");

// Require helpers
const fs = require('fs');
const glob = require('glob');
const path = require('path');

// --------------
// Define
// --------------

const sparkline_replace = {
  loader: 'webpack-replace',
  query: {
    search: '[\'sparkline\']',
    replace: ''
  }
};

const sparkline_strip = {
  loader: 'webpack-strip-blocks',
  options: {
    blocks: ['sparkline'],
    start: '/*',
    end: '*/'
  }
};

const babel_loader = {
  loader: 'babel-loader',
  options: {
    presets: ['env']
  }
};

/**
 * Banner Plugin
 *
 * @plugin
 */
const banner_replacements = {
  pkg: JSON.parse(fs.readFileSync('package.json', 'utf8')),
  year: (new Date()).getFullYear()
};
const banner_text = fs.readFileSync('./build/grunt/banner.txt', 'utf8').replace(/\$\{([^\}]+)\}/g, (matched, variable) => {
  let reference = banner_replacements;
  variable.split('.').forEach(path => reference = reference[path] || {});
  return reference;
});

module.exports = [{
  entry: glob.sync('./src/**/*.es6'),
  mode: 'none', // none, development, production
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ejschart.js'
  },
  module: {
    rules: [{
      test: /\.es6?$/,
      use: [sparkline_replace, sparkline_strip, babel_loader]
    }]
  },
  plugins: [
    new webpack.BannerPlugin({ banner: banner_text, raw: true })
  ]
}, {
  entry: glob.sync('./src/**/*.es6'),
  mode: 'production', // none, development, production
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ejschart.min.js'
  },
  module: {
    rules: [{
      test: /\.es6?$/,
      use: [sparkline_replace, sparkline_strip, babel_loader]
    }]
  },
  plugins: [
    new webpack.BannerPlugin({ banner: banner_text + '\n\n', raw: true })
  ]
}];
