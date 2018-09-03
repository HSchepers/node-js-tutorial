var events = require('events');

var MyEmitter = new events.EventEmitter();

MyEmitter.on('MyEvent', function(msg, mssg){ //declaring EventListener
  console.log(msg);
  setTimeout(function() {
    console.log(mssg);
  }, 2000);
});

MyEmitter.emit('MyEvent', 'something happend', 'srsly'); //firing Event
