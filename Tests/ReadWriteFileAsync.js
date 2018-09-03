const fs = require('fs');

fs.readFile('ReadMe.txt', 'utf8', function(error, content) {
  fs.writeFile('WriteMe.txt', content, function(){});
    console.log('File written');
});

console.log('This is displayed befor the file is written');

// to delete a file
// fs.unlink('WriteMe.txt');
