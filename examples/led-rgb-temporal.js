var temporal = require("temporal");
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led.RGB([9, 10, 11]);

  temporal.queue([{
    wait: 1000,
    task: function() {
      led.color("#FF0000");
      console.log("Red");
    }
  }, {
    wait: 2000,
    task: function() {
      led.color("#00FF00");
      console.log("Green");      
    }
  }, {
    wait: 2000,
    task: function() {
      led.color("#0000FF");
      console.log("Blue");
    }
  }, {
    wait: 2000,
    task: function() {
      led.off();
      console.log("Off");
    }
  } ]);
});