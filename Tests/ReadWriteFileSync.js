const fs = require('fs');

var content = fs.readFileSync('ReadMe.txt', 'utf8' );
console.log(content);
fs.writeFileSync('WriteMe.txt', content);
