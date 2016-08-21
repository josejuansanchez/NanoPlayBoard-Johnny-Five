var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var potentiometer = new five.Sensor("A1");

  potentiometer.on("change", function() {
    console.log("value: ", this.value);
    console.log("scaleTo: ", this.scaleTo(0, 100));
    console.log("fscaleTo: ", this.fscaleTo(0, 100));
  });
});