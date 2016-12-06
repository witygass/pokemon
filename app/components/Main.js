import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import searchPokemon from '../lib/searchPokemon'

//App is not defined below - need to figure out why.

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App searchPokemon={exampleData} />,
    document.getElementById('app')
  );
});
