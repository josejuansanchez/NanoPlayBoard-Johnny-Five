var five = require("johnny-five");
var board = new five.Board();

// For use with 74HC595 chip

board.on("ready", function() {
  var register = new five.ShiftRegister({
    pins: {
      data: 13,
      clock: 12,
      latch: 6
    }
  });

  //2, 4, 5, 16, 17
  var columns = [ 
    new five.Pin(2), 
    new five.Pin(4),
    new five.Pin(5),
    new five.Pin(16),
    new five.Pin(17)
  ];

  columns[0].write(2, 1);
  columns[1].write(4, 1);
  columns[2].write(5, 1);
  columns[3].write(16, 1);
  columns[4].write(17, 1);

  var value = 1;
  //var values = [0x3f,0x0,0x0,0x0,0x0];
  var index = 0;

  setInterval(function() {
    value = value > 0x11 ? value >> 1 : 0x88;
    register.send(value);
    //register.send(values[index++]);
    //if (index == 5) index = 0;
  }, 200);
});