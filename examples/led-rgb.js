var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led.RGB([9,10,11]);

  // Turn it on and set the initial color
  led.on();
  led.color("#FF0000");

  led.blink(1000);
});
