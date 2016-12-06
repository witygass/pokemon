import searchPokemon from './searchPokemon';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//CHECK THIS!!! - not sure about localhost:port
mongoose.connect('mongodb://localhost/pokemon');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('connected to mongo via mongoose');
});

// START WORKING HERE
var pokemonSchema = new Schema({
  id: Number,
  abilities: [{name:String, url:String}],
  name: String,
  location_area_encounters: String,
  types: [{type:{name:String}}]
});

var Pokemon = mongoose.model('Pokemon', pokemonSchema);




//
// ///////////// POKEMON OBJECT MAP /////////////
// Object
// abilities:Array[2]
// base_experience:240
// forms:Array[1]
// game_indices:Array[20]
// height:17
// held_items:Array[0]
// id:6
// is_default:true
// location_area_encounters:"/api/v2/pokemon/6/encounters"
// moves:Array[106]
// name:"charizard"
// order:7
// species:Object
// sprites:Object
// stats:Array[6]
// types:Array[2]
// weight:905
