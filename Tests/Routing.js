const http = require('http');
const fs = require('fs');
const content = require('./module');


var server = http.createServer(function(req, res){
  console.log('Request: ' + req.url);

  if (req.url === '/home' || req.url === '/'){
    res.writeHead(200, content.html);
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
  } else {
    res.writeHead(404, content.plain);
    res.end('Resource not found');
  }
});

server.listen(3000, '127.0.0.1');
console.log('Server is online on port 3000');
