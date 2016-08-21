var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led.RGB([9,10,11]);
  
  keypress(process.stdin);

  process.stdin.on("keypress", function (ch, key) {
    if (key.name === "space") {
      led.toggle();
    } 
  });
});