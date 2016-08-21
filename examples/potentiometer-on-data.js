var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var potentiometer = new five.Sensor({
    pin: "A1",
    freq: 250
  });

  potentiometer.on("data", function() {
    console.log(this.value, this.raw);
  });
});


// References
//
// http://arduino.cc/en/Tutorial/AnalogInput