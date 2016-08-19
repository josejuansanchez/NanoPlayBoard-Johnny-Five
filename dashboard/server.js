var fs = require('fs');
var express = require('express');
var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);

var five = require("johnny-five");
var led;
var potentiometer;
var photoresistor;
var board = new five.Board();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  fs.readFile(__dirname + '/public/index.html', function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Not Found");
      res.end();
    } else {
      res.writeHead(200);
      res.write(data, "utf8");
      res.end();
    }
  });
});

board.on("ready", function() {
  led = new five.Led.RGB([9,10,11]);  
  potentiometer = new five.Sensor("A1");
  photoresistor = new five.Sensor("A0");  
});

io.sockets.on('connection', function(socket) {
 
  if (board.isReady) {
    potentiometer.on("change", function(){
      socket.emit('potentiometer', { raw: this.raw });
    });

    photoresistor.on("change", function(){
      socket.emit('photoresistor', { raw: this.raw });
    });
  }

  socket.on('rgb', function(data) {
    if (board.isReady) {
      led.on();
      led.color(data.color);
    } 
  });

});

console.log('Server app listening on port 3000...');