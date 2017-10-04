import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
var $ = require('jquery');

let timeout = null;
let cpuloadData = [];
let minIndex = 0;
let maxIndex = 20;

var refreshData = function() {
    $.ajax({
    dataType: "jsonp",
    url: "http://localhost:8080/api",
    success: data => {
        if (cpuloadData.length > maxIndex) {
            cpuloadData.shift();
        }
        cpuloadData.push(data.load);
        ReactDOM.render(<App data={cpuloadData}/>, document.getElementById('root'));
        }
    });
}
clearInterval(timeout); 
timeout = setInterval(refreshData,1000); 