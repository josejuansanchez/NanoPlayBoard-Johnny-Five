var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // For use with 74HC595 chip
  var register = new five.ShiftRegister({
    pins: {
      data: 13,
      clock: 12,
      latch: 6
    }
  });

  var columns = [
    new five.Pin(2),
    new five.Pin(4),
    new five.Pin(5),
    new five.Pin(16),
    new five.Pin(17),
  ];

  function print(pattern) {
    for(var index = 0; index < pattern.length; index++) {
      register.send(pattern[index]);
      columns[index].high();
      setInterval(function() {}, 2);
      columns[index].low();
    }
  }

  this.loop(2, function() {
    var pattern = [8, 18, 16, 18, 8];
    print(pattern);
  });

});