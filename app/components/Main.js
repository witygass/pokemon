import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import searchPokemon from '../lib/searchPokemon'
import schemaInit from '../lib/schemaInit'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App searchPokemon={exampleData} />,
    document.getElementById('app')
  );
});
