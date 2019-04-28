const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = () => { }) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET') {
    var command = req.url.match(/\=(.*[^\&])\&/i)
    
    
    if (command && command[1] === 'swim') {
      // do something
      res.writeHead(200, headers);
      var keyPress = req.url.match(/\&\=(.*)/i)[1].toLowerCase();
      res.write(`${keyPress}`)
      res.end();
    } else {
      var img = fs.readFileSync('/Users/student/Desktop/hrsf117-a-synchronous-swim/server/spec/water-lg.jpg');
      res.writeHead(200, headers);
      res.end(img, 'binary');
    }
  }
  
  
};



 // return bg img
    //   // console.log(req.url);
    //   if (fs.access('../background.jpg', fs.F_OK, (err) => {
    //     if (err) {
    //       res.writeHead(404, headers);
    //       return;
    //     }
    //     res.writeHead(200, headers);
    //   }));