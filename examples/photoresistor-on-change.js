var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var photoresistor = new five.Sensor("A0");

  photoresistor.on("change", function() {
    console.log(this.value);
  });
});