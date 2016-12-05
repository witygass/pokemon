var searchPokemon = (options, callback) => {
  console.log('searching for pokemon')
  // $.ajax({
  //   cache: true, //research this
  //   data: $.extend({
  //     key:options.key,
  //     q: options.query,
  //     part: 'snippet' // DATA IS SENT TO THE API
  //   },
  //   {
  //     maxResults: options.max,
  //     type:'pokemon',
  //     pageToken: $('#pageToken').val()}),
  //   dataType: 'json',
  //   type: 'GET',
  //   timeout: 5000,
  //   url: 'http://pokeapi.co/api/v2/'
  // });
};

window.searchPokemon = searchPokemon;
