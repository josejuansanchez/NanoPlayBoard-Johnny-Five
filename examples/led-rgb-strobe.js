var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led.RGB([9,10,11]);
  led.on();
  led.color("#0000FF");
  led.strobe(1000);
});
