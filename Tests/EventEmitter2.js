const events = require('events');
const util = require('util');

//declaring a 'Person' Object
var Person = function(name) {
  this.name = name;
};

//adding a EventEmitter to the Object
util.inherits(Person, events.EventEmitter);

//declaring an Array and adding people to it
var people = new Array;
people.push(niklas = new Person('Niklas'));
people.push(marvin = new Person('Marvin'));
people.push(kevin = new Person('Kevin'));

//adding an EventListener to each person
people.forEach(function(person) {
  person.on('speak', function(msg){
    console.log(`${person.name} said: ${msg}`);
  });
});

//emitting the events
marvin.emit('speak', 'Ich hab Hunger');
niklas.emit('speak', 'Ich auch');
kevin.emit('speak', 'Ihr Mongos');
