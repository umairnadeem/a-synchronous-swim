const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  // if(req.method === 'GET'){
  //   const validMessages = ['left', 'right', 'up', 'down'];
  //   res.write('req');
  // }
  var extractedKey = req.url.match(/\=(.*)/i)[1].toLowerCase();
  res.write(`${extractedKey}`)
  res.end();
};

// another file.ks
/*
const whatever = require('./httpHandler.js')
*/