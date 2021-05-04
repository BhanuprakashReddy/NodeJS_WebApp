const http = require('http');
var url = require('url');

//const app = require('application');
const express = require('express');
const app = express();
//var os = require("os");
//var fs = require('fs');

// --- User defined module ---
var dt = require('./date_module');

const server = http.createServer((request, response) => {
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    //response.end("Hello World!");

    request.on('data', (chunk) => {

      console.log('You received a chunk of data', chunk)
    });
  
    response.write("Hello Bhanu !" + '\r\n');
    response.write("How R U ?" + '\r\n');
    response.write('URL : ' + request.url + '\r\n');
    response.write('Today Date and Time: ' + dt.TodayDateTime() + '\r\n');
    response.end("End app!");

});

const port = process.env.PORT || 1080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


// Web API 
//*
  
  app.get('/products', (req, res) => {
    // handle the request

    console.log("[Products : get] ...");

  });
  
  app.post('/products', (req, res) => {
    // handle the request

    console.log("[Products : post] ...");

  });
//*/