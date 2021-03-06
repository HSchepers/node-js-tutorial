const http = require('http');
const fs = require('fs');

var server = http.createServer(function(request, response){
  console.log('Request: ' + request.url);

  response.writeHead(200, {'Content-Type': 'text/html'});

  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('Server is online on port 3000');
