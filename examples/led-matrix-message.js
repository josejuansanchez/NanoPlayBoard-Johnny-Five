var alphabet = require("./alphabet.js");
var ascii = alphabet.ascii;

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

  function print(message) {
    var pattern = new Array(5);
    for (var i = 0; i < message.length*5-4; i++) {
      pattern[0] = ascii[message.charCodeAt(parseInt(i/5))-0x20][i%5];
      pattern[1] = ascii[message.charCodeAt(parseInt((i+1)/5))-0x20][(i+1)%5];
      pattern[2] = ascii[message.charCodeAt(parseInt((i+2)/5))-0x20][(i+2)%5];
      pattern[3] = ascii[message.charCodeAt(parseInt((i+3)/5))-0x20][(i+3)%5];
      pattern[4] = ascii[message.charCodeAt(parseInt((i+4)/5))-0x20][(i+4)%5];

      for(var index = 0; index < pattern.length; index++) {
        register.send(pattern[index]);
        columns[index].high();
        setInterval(function() {}, 2);
        columns[index].low();
      }
    }
  }

  board.loop(100, function() {
    print(" H O L A");
  });

});

