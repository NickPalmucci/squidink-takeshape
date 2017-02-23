const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProd ? false : 'source-map',
  entry: {
    'javascripts/main': './src/javascripts/main.js',
    'stylesheets/main': './src/stylesheets/main.css'
  },
  output: {
    path: path.join(__dirname, 'static/assets'),
    filename: isProd ? '[name].[chunkhash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|vendor/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader?name=[path][name].[hash:base64:5].[ext]"
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.json']
  },
  plugins: [
    new ManifestPlugin(),
    new ExtractTextPlugin(isProd ? '[name].[chunkhash].css' : '[name].css')
  ]
};
