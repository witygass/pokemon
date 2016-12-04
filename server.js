var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require ('./webpack.config.js');
var app = express();

var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));
// app.get('/www', function(req, res) {
//   res.render('index.html');
// });

console.log('dirname: ', __dirname);
// console.log('compiler: ', compiler);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Express app listening at http://%s:%s', host, port);
});
