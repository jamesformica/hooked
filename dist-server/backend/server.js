"use strict";

var _ws = _interopRequireDefault(require("ws"));

var _chalk = _interopRequireDefault(require("chalk"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _consts = require("../common/consts");

var _events = require("../common/events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HOST = _consts.server.HOST,
    PORT = _consts.server.PORT,
    TICK_RATE = _consts.server.TICK_RATE,
    FRESH_FISH = _consts.server.FRESH_FISH; // FISHY MEMORY

var freshFishies = [];
var stream = [];
var realPort = process.env.PORT || PORT;
var wss = new _ws["default"].Server({
  port: realPort,
  host: HOST
}); // Server has started

wss.on('listening', function () {
  var _wss$address = wss.address(),
      port = _wss$address.port,
      address = _wss$address.address;

  console.log("Server running at ".concat(_chalk["default"].bold.magenta("http://".concat(address || 'localhost', ":").concat(port))));
  broadcastLoop();
});
wss.on('connection', function (ws, req) {
  var ip = req.connection.remoteAddress;
  console.log("client connected from ".concat(ip)); // On connection send fishy total

  ws.send(formatFishies(freshFishies)); // Recieving add fishy event

  ws.on('message', function (message) {
    if (message === _events.ADD_FISHY) {
      var time = Date.now();
      var id = "".concat((0, _v["default"])());
      var fishyData = {
        id: id,
        time: time // Add to stream and increment fishy total

      };
      stream.push(fishyData);
      freshFishies.push(fishyData);
      console.log("Adding 1 fishy boi, fishies are now at ".concat(freshFishies.length));
      ws.send(formatFishies(freshFishies));
    }
  });
});

var broadcastLoop = function broadcastLoop() {
  freshFishies = calculateFreshTotal();
  console.log("Broadcasting to clients, fishies: ".concat(freshFishies.length));
  broadcastFishies();
  setTimeout(broadcastLoop, TICK_RATE);
};

var broadcastFishies = function broadcastFishies() {
  wss.clients.forEach(function (client) {
    if (client.readyState === _ws["default"].OPEN) {
      client.send(formatFishies(freshFishies));
    }
  });
};

var calculateFreshTotal = function calculateFreshTotal() {
  var timeNow = Date.now();
  var totalEvents = stream.filter(function (event) {
    return timeNow - event.time < FRESH_FISH;
  });
  return totalEvents;
};

var formatFishies = function formatFishies(fishies) {
  return JSON.stringify(fishies);
};