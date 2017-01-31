'use strict';

const path = require('path');
const webpack = require('webpack');

const config = {
  resolve: {
    modules: [
      path.resolve(__dirname, 'client', 'scripts'),
      path.resolve(__dirname, 'client', 'styles'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', 'scss'],
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(css|scss|woff|woff2|svg|png|jpg|jpeg|gif|m4a|mp4|webp|webm)$/,
        loader: 'null',
      },
    ],
  },

  output: {
    libraryTarget: 'commonjs2',
  },

  externals: [
    'react/addons',
    'react/lib/ReactContext',
    'react/lib/ReactContext',
  ],

  plugins: [
    new webpack.ProvidePlugin({
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('test'),
      },
    }),
  ],
};

module.exports = config;
