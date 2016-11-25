//'use strict';
//var component = require('./component.js');
//
//
//document.body.appendChild(component());

//ES6 模块加载器语法
import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}