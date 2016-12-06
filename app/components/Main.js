import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

fetch('/pokemon', {
  method:'get'
})
.then(function(response){
  //how do I access the value of this promise...
  var pokemons = response.json();
  console.log(pokemons);
})
.catch(function(err){
  console.log(err)
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App searchPokemon={exampleData} />,
    document.getElementById('app')
  );
});
