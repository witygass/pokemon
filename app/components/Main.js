import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App searchPokemon={[]} />,
    document.getElementById('app')
  );
});
