const http = require('http');
const fs = require('fs');

var server = http.createServer(function(request, response){
  console.log('Request: ' + request.url);

  response.writeHead(200, {'Content-Type': 'application/json'});

  var myObject = {
    name: 'Henning',
    age: 21,
    location: 'Germany',
  };

  response.end(JSON.stringify(myObject));
});

server.listen(3000, '127.0.0.1');
console.log('Server is online on port 3000');
