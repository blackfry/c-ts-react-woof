'use strict';

const webpack = require('webpack');
const { setup } = require('./webpackutil');

module.exports = [
  setup({
    context: __dirname,
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['awesome-typescript-loader', 'babel-loader'],
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        },
      ]
    },
    plugins: [],
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  })
];
