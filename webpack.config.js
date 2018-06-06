const path = require('path');
const glob = require('glob');

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
  }
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
  }
}];
