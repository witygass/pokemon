var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var webpackConfig = require ('./webpack.config.js');
var models = require('./schemaInit');
var request = require('request');
var jsonParser = bodyParser.json();
var app = express();

//START mongoose db code
//CHECK THIS!!! - not sure about localhost:port
mongoose.connect('mongodb://localhost/pokemon');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('connected to mongo via mongoose');
});
//MONGOOSE end
var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/init', function(req, res) {
  request('http://pokeapi.co/api/v2/pokemon/1', function(error, response, body) {
    if (error) {console.log(error)}
    res.send(body);
    // var thisPokemon = new models.Pokemon(body);
    // console.log(thisPokemon);
  })
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Express app listening at http://localhost:', /*host,*/ port);
});
