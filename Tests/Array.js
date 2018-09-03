var cars = new Array;
var len = 0;
function output(Array){
  len = cars.length;
  for (var i = 0; i < len; i++) {
    console.log(Array[i]);
  };
  console.log("-----------------");
};

cars.push("Ford"); //adding an item
output(cars);
cars.push("Opel");
output(cars);
cars.push("Volvo");
output(cars);
cars.pop(); //deleting last entry
output(cars);
