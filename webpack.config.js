
// const webpack = require('webpack')
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     entry: [
//         'webpack-dev-server/client?http://0.0.0.0:9000', // WebpackDevServer host and port
//         'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
//         './src/index.tsx',
//     ],
//     output: {
//         filename: "[name].bundle.js",
//         path: path.resolve(__dirname, 'dist'),
//         publicPath: '/'
//     },
//     resolve: {
//         extensions: ['.js', '.json', '.ts', '.tsx'],
//         alias: {
//             react: path.resolve(path.join(__dirname, './node_modules/react')),
//             'babel-core': path.resolve(
//               path.join(__dirname, './node_modules/@babel/core'),
//             ),
//         },
//     },
//     devtool: 'source-map',
//     devServer: {
//         contentBase: path.join(__dirname, "dist"),
//         compress: true,
//         port: 9000
//       },
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/,
//                 use: ['awesome-typescript-loader', 'babel-loader'],
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                   MiniCssExtractPlugin.loader,
//                     "css-loader",
//                     'postcss-loader',
//                     'sass-loader',
//                 ]
//               }
//         ]
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//         // new HtmlWebpackPlugin({
//         //     title: 'TypeScript React Doggos',
//         //   }),
//         new MiniCssExtractPlugin({
//             filename: "[name].css",
//             chunkFilename: "[id].css"
//           })
//       ]
// };


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
