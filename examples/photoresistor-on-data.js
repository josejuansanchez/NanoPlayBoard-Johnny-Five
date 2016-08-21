var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var photoresistor = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  photoresistor.on("data", function() {
    console.log(this.value);
  });
});


// References
//
// http://nakkaya.com/2009/10/29/connecting-a-photoresistor-to-an-arduino/