"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _koa = _interopRequireDefault(require("koa"));
var _routers = _interopRequireDefault(require("./routers"));
var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));
var _config = require("./config");
var _routeLog = _interopRequireDefault(require("./middlewares/route-log"));
var _whiteListOrigin = _interopRequireDefault(require("./middlewares/white-list-origin"));
var _db = _interopRequireDefault(require("./models/mongo/db"));
var _socket = _interopRequireDefault(require("socket.io"));
var _http = _interopRequireDefault(require("http"));
var _socket2 = _interopRequireDefault(require("./services/socket"));
var _jwtVerify = require("./middlewares/jwt-verify");
var _redis = require("redis");
var _redisAdapter = require("@socket.io/redis-adapter");
var app = new _koa["default"]();
var pubClient = (0, _redis.createClient)({
  url: "redis://localhost:6379"
});
var subClient = pubClient.duplicate();
app.use(_whiteListOrigin["default"]).use(_routeLog["default"]).use((0, _koaBodyparser["default"])({
  extendTypes: ['application/json'],
  onerror: function onerror(err, ctx) {
    ctx["throw"]('Body parse error', 422);
  }
})).use(_routers["default"]);
var server = _http["default"].createServer(app.callback());
var io = (0, _socket["default"])(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
io.adapter((0, _redisAdapter.createAdapter)(pubClient, subClient));
global._basedir = __dirname;
global._io = io;
global._io.use(_jwtVerify.verifyTokenSocket);
global._io.on("connection", _socket2["default"].connection.bind(_socket2["default"]));
server.listen((0, _config.cfg)("APP_PORT", parseInt), (0, _config.cfg)("APP_HOST", String));
console.log('Chay thanh cong tren %s:%s', (0, _config.cfg)('APP_HOST', String), (0, _config.cfg)('APP_PORT', parseInt));