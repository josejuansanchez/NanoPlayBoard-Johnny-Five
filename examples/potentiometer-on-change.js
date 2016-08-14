var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var potentiometer = new five.Sensor("A1");

  potentiometer.on("change", function() {
    console.log(potentiometer.value);
  });
});