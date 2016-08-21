var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  //   - attached to pin "A1"
  //   - emits change events when the ADC value has changed by +5/-5
  //
  var potentiometer = new five.Sensor({
    pin: "A1",
    threshold: 5
  });


  potentiometer.on("change", function() {
    console.log(potentiometer.value);
  });
});