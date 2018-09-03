const fs = require('fs');
//can be Sync or Async
fs.mkdir('stuff',function(){
  setTimeout(function() {
    fs.readFile('ReadMe.txt', function(error, content){
      fs.writeFile('./stuff/WriteMe.txt', content, function(){})
    })

    //fs.rmdir('stuff',function(){}); //removes directory if empty
  }, 1000);
});
