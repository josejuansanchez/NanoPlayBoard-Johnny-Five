var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var potentiometer = new five.Sensor({
    pin: "A1",
    freq: 250
  });

  potentiometer.on("data", function() {
    console.log("value: ", this.value , " - raw: ", this.raw);
    console.log("scaleTo: ", this.scaleTo(0, 100));
    console.log("fscaleTo: ", this.fscaleTo(0, 100));    
  });
});
