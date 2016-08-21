var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var photoresistor = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  photoresistor.on("data", function() {
    console.log("value: ", this.value);
    console.log("scaleTo: ", this.scaleTo(0, 100));
    console.log("fscaleTo: ", this.fscaleTo(0, 100));
  });
});