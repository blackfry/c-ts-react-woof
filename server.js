const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  // publicPath: config.output.path,
  hot: true,
  historyApiFallback: true
}).listen(9000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:9000');
});