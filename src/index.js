import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

const [mostImportantItem, second] = ["boots", "tent", "headlamp"];
//const [, , light] = ["boots", "tent", "headlamp"];
console.log(mostImportantItem, second);
//console.log(light);

// Object vs array destructuring:

ReactDOM.render(
    <App authorized={true} />,
  document.getElementById('root')
);

