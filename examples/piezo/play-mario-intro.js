// npm install j5-songs --save
var five = require('johnny-five');
var songs = require('j5-songs');
var board = new five.Board();

board.on('ready', function () {
  var piezo = new five.Piezo(3);
    var song = songs.load('mario-intro');
    piezo.play(song);
});