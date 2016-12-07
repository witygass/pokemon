var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// START WORKING HERE
var pokemonSchema = new Schema({
  id: {type: Number, unique:true, required: true, dropDups: true},
  abilities: [],
  name: String,
  location_area_encounters: String,
  types: [],
  sprites: []
});

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

var queryForPokemonBy = function(options = {}, cb) {
  console.log('Mongoose: searching mongo for pokemon')
  Pokemon.find(options).sort({id:1})
    .then(cb)
    .catch(function(err) {console.log(err)})
}

module.exports.Pokemon = Pokemon;
module.exports.queryForPokemonBy = queryForPokemonBy;

// ///////////// POKEMON OBJECT MAP /////////////
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
