// var React = require('react');
// var ReactDOM = require('react-dom');
// var Counter = require('./Counter');

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

console.log('hello world');

console.log(React)

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
