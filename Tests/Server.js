const http = require('http');

var server = http.createServer(function(request, response){
  console.log('Request: ' + request.url);

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello');
});

server.listen(3000, '127.0.0.1');
console.log('Server is online on port 3000');
