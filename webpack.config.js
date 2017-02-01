'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const autoprefixer = require('autoprefixer');
const csswring = require('csswring');

const dev = process.env.NODE_ENV === 'development';
const production = process.env.NODE_ENV === 'production';

const config = {
  devtool: dev ? 'cheap-module-eval-source-map' : undefined,

  entry: {
    app: [
      path.resolve(__dirname, 'client', 'entry.js'),
    ].concat(dev
      ? ['webpack-hot-middleware/client']
      : []
    ),
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: `scripts/${dev ? '[name]' : '[chunkhash:8]'}.js`,
    chunkFilename: `scripts/${dev ? '[name]' : '[chunkhash:8]'}.js`,
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'client', 'scripts'),
      path.resolve(__dirname, 'client', 'styles'),
      path.resolve(__dirname, 'client', 'media'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', 'scss'],
    alias: {},
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(woff|woff2|svg|png|jpg|jpeg|gif|m4a|mp4|webm)$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: `media/${production ? '[hash:8]' : '[name]'}.[ext]`,
        },
      },
      {
        test: /\.scss$/,
        loader: dev
          ? 'style-loader!css-loader!postcss-loader!sass-loader'
          : ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader!postcss-loader!sass-loader',
          }),
      },
    ],
  },

  externals: [
    'react/addons',
    'react/lib/ReactContext',
    'react/lib/ReactContext',
  ],

  plugins: [
    new webpack.ProvidePlugin({
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: !dev,
      debug: dev,
      options: {
        context: __dirname,
        sassLoader: {
          // Options for sass processing.
          outputStyle: 'expanded',
          includePaths: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'client', 'styles'),
          ],
        },
        postcss: [
          autoprefixer({ browsers: ['last 2 version'] }),
        ].concat(dev
          ? []
          : [csswring({ removeAllComments: true })]
        ),
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunksSortMode: 'dependency',
      template: path.resolve(__dirname, 'client', 'index.html'),
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      },
    }),
    new CopyWebpackPlugin([
      {
        // from: path.resolve(__dirname, 'src', 'media', 'sfx', 'klang', 'sounds'),
        from: 'client/media/fb_share.png',
        to: 'media',
      },
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
  ].concat(dev
    ? [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('dev'),
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ]
    : [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        },
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        compress: {
          screw_ie8: true,
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          drop_console: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: false,
        },
      }),
      new ExtractTextPlugin('styles/[contenthash].css'),
      new OfflinePlugin(),
    ]
  ),
};

module.exports = config;
