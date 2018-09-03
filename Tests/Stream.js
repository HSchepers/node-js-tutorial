const http = require('http');
const fs = require('fs');

//Writeable Stream
var myReadStream = fs.createReadStream(__dirname + '/ReadMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  myWriteStream.write(chunk);
});

//Readable Stream
/*
var myReadStream = fs.createReadStream(__dirname + '/ReadMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
  console.log('new chunk received:');
  console.log(chunk);
});
*/
