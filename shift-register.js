// For use with 74HC595 chip

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var register = new five.ShiftRegister({
    pins: {
      data: 13,
      clock: 12,
      latch: 6
    }
  });

  // Declare and initialize the array for the columns
  var columnsPins = [2, 4, 5, 16, 17];
  var columns = new Array(5);

  for(var i = 0; i < columns.length; i++) {
    columns[i] = new five.Pin(columnsPins[i]);
  }

  var pattern = [8, 18, 16, 18, 8];
  var index = 0;

  /*
  setInterval(function() {
    register.send(pattern[index]);
    columns[index].high();
    setInterval(function() {}, 2);
    columns[index].low();

    index++;
    if (index == pattern.length) index = 0;

  }, 2);
  */

  this.loop(2, function() {
    register.send(pattern[index]);
    columns[index].high();
    setInterval(function() {}, 2);
    columns[index].low();

    index++;
    if (index == pattern.length) index = 0;
  });

});