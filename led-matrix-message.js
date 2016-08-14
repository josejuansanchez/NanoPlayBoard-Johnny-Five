var lib = require("./lib.js");
var ascii = lib.ascii;

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

  function print(message) {
    var pattern = new Array(5);
    for (var i = 0; i < message.length*5-4; i++) {
      pattern[0] = ascii[message.charCodeAt(parseInt(i/5))-0x20][i%5];
      pattern[1] = ascii[message.charCodeAt(parseInt((i+1)/5))-0x20][(i+1)%5];
      pattern[2] = ascii[message.charCodeAt(parseInt((i+2)/5))-0x20][(i+2)%5];
      pattern[3] = ascii[message.charCodeAt(parseInt((i+3)/5))-0x20][(i+3)%5];
      pattern[4] = ascii[message.charCodeAt(parseInt((i+4)/5))-0x20][(i+4)%5];

      var _scrollSpeed = 10;

      // Display the pattern several times
      for(var n = 0; n < _scrollSpeed; n++) {
        register.send(pattern[index]);
        columns[index].high();
        setInterval(function() {}, 2);
        columns[index].low();

        index++;
        if (index == pattern.length) index = 0;
      }
    }
  }

  this.loop(100, function() {
    print("H O L A");
  });

});

