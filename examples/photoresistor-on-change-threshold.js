var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  //   - attached to pin "A0"
  //   - emits change events when the ADC value has changed by +5/-5
  //
  var photoresistor = new five.Sensor({
    pin: "A0",
    threshold: 5
  });

  photoresistor.on("change", function() {
    console.log(this.value);
  });
});