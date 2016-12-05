// var React = require('react');
// var ReactDOM = require('react-dom');
// var Counter = require('./Counter');

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';

// console.log(App);

//App is not defined below - need to figure out why.

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App searchPokemon={exampleData} />,
    document.getElementById('app')
  );
});
