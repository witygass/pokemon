var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var mongoose = require('mongoose');
var request = require('request');
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var webpackConfig = require ('./webpack.config.js');
var models = require('./schemaInit');
var jsonParser = bodyParser.json();
var app = express();

//Mongoose
mongoose.connect('mongodb://localhost/pokemon');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('connected to mongo via mongoose');
});
////

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/pokemon', function(req,res) {
  options = {};
  models.queryForPokemonBy(options, function(result) {
    res.send(result);
  });
});

app.get('/init', jsonParser, function(req, res) {
  //add condition if pokemon in db, redirect to index
  // pokemonSchema.query.byName = function(name) {
  //   return this.find({name:})
  // };

  // for (var i = 0; i < 152; i++) {
    request('http://pokeapi.co/api/v2/pokemon/1' /*+ i.toString()*/,
    function(error, response, body) {
      if (error) {console.log(error)}
      var parsedBody = JSON.parse(body);
      var thisPokemon = new models.Pokemon(parsedBody)
      console.log(thisPokemon);
      thisPokemon.save(function(err, savedModel){
        if(err) {console.log('error saving model', err)}
        else {
          console.log('model was saved');
        }
      });
      // console.log(parsedBody);
      // res.send(parsedBody);
    })
  // }
});

app.use(express.static(__dirname + '/www'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Express app listening at http://localhost:', /*host,*/ port);
});
