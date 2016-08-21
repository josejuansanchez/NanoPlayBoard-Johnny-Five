var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led.RGB([9,10,11]);
  var intensity = 0;
  
  keypress(process.stdin);

  process.stdin.on("keypress", function (ch, key) {
    if (key.name === "up") {
      if (intensity < 100) {
        intensity = intensity + 10;
      }
    } 
    
    if (key.name === "down") {
      if (intensity > 0) {
        intensity = intensity - 10;
      }
    }

    led.intensity(intensity);
    console.log(intensity);
  });
});