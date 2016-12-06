import $ from 'jquery';

var searchPokemon = (options, callback) => {
  $.get({
    url: 'http://pokeapi.co/api/v2/pokemon/' + options.pokmonid.toString(),
    }
  }, function(data, err) {
    if (err) {console.log('there was an error fetching pokeapi data', err)}
    console.log(data);
    var Pokemon = mongoose.model('Pokemon', pokemonSchema);
  })
};

export default searchPokemon;
