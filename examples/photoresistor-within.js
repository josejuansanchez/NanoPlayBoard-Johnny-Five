var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var photoresistor = new five.Sensor("A0");

  photoresistor.within([10, 50], function() {
    console.log("Sensor value property falls within 10-50");
  });

  photoresistor.on("change", function() {
    console.log(this.value);
  });
});