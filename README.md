# NanoPlayBoard-Johnny-Five
Experiments with Arduino [NanoPlayBoard][1] and [Johnny-Five][2], the JavaScript Robotics &amp; IoT Platform.

## Quick start
* Install [Node.js][3].
* Setup your [NanoPlayBoard][1] uploading [StandardFirmata][4] to your board ([aditional instructions][5]).
* Run: `npm install johnny-five`
* Run the examples: `node blink.js`

## Dashboard
This repository includes a simple dashboard developed using [Socket.io][8], [Express][9] and [Johnny-Five][2], in order to show how to interact with the [NanoPlayBoard][1] from a web browser.

![Dashboard][10]

## Credits
* The examples used in this repository are based on the [examples][11] provided by [Rick Waldron][12].
* [Songs for Johnny-Five Piezo class][6] have been developed by [Julian Duque][7].

## License

```
Copyright 2016 José Juan Sánchez

Licensed under the GNU General Public License, Version 3 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.gnu.org/licenses/gpl-3.0.en.html

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[1]: http://nanoplayboard.org
[2]: http://johnny-five.io
[3]: http://nodejs.org/download/
[4]: http://github.com/firmata/arduino
[5]: http://johnny-five.io/platform-support/#arduino-nano
[6]: http://github.com/julianduque/j5-songs
[7]: http://github.com/julianduque
[8]: http://socket.io
[9]: http://expressjs.com
[10]: https://github.com/josejuansanchez/NanoPlayBoard-Johnny-Five/blob/master/extras/nanoplayboard-dashboard-j5.gif
[11]: http://github.com/rwaldron/johnny-five
[12]: http://github.com/rwaldron
