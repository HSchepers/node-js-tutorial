const http = require('http');
const fs = require('fs');

/* The Pipe itself:
var myReadStream = fs.createReadStream(__dirname + '/ReadMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.pipe(myWriteStream);
*/

var server = http.createServer(function(request, response){
  console.log('Request: ' + request.url);

  response.writeHead(200, {'Content-Type': 'text/plain'});

  var myReadStream = fs.createReadStream(__dirname + '/ReadMe.txt', 'utf8');
  myReadStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('Server is online on port 3000');
