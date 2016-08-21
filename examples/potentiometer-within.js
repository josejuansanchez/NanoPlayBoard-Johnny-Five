var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var potentiometer = new five.Sensor("A1");

  potentiometer.within([255, 512], function() {
    console.log("Sensor value property falls within 255-512");
  });

  potentiometer.on("change", function() {
    console.log(potentiometer.value);
  });  
});