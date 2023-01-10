"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.scan = scan;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _redis = _interopRequireDefault(require("redis"));
var _bluebird = _interopRequireDefault(require("bluebird"));
var _config = require("../config");
_bluebird["default"].promisifyAll(_redis["default"].RedisClient.prototype);
_bluebird["default"].promisifyAll(_redis["default"].Multi.prototype);
var redisClient = _redis["default"].createClient((0, _config.cfg)('REDIS_PORT'), (0, _config.cfg)('REDIS_HOST'));

/**
 * Scan all keys which match the pattern
 * @param  {Number} cursor The starting point (as first page)
 * @param  {String} MATCH  The pattern to search
 * @param  {Number} COUNT  How many items in a page
 * @param  {Number} depth  How many page does Scan take? depth = 0 means no limit page.
 * @return {Array[String]} Searching result
 */
function scan(_x, _x2, _x3) {
  return _scan.apply(this, arguments);
}
function _scan() {
  _scan = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cursor, MATCH, COUNT) {
    var depth,
      res,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          depth = _args.length > 3 && _args[3] !== undefined ? _args[3] : 3;
          _context.prev = 1;
          _context.next = 4;
          return redisClient.scanAsync(cursor, 'MATCH', MATCH, 'COUNT', COUNT);
        case 4:
          res = _context.sent;
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
        case 10:
          res = res || [0, []];

          // Update the cursor position for the next scan
          cursor = res[0] * 1;

          // From <http://redis.io/commands/scan>:
          // 'An iteration starts when the cursor is set to 0,
          // and terminates when the cursor returned by the server is 0.'
          if (!(cursor === 0 || cursor == depth)) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res[1]);
        case 14:
          _context.t1 = res[1];
          _context.next = 17;
          return scan(cursor, MATCH, COUNT);
        case 17:
          _context.t2 = _context.sent;
          return _context.abrupt("return", _context.t1.concat.call(_context.t1, _context.t2));
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 7]]);
  }));
  return _scan.apply(this, arguments);
}
function prefixAll(obj) {
  var PREFIX = (0, _config.cfg)('REDIS_PREFIX');
  var _loop = function _loop() {
    var key = _Object$keys[_i];
    if (typeof obj[key] == 'function') {
      obj["_" + key] = function () {
        var args = arguments;
        if (args.length > 0 && typeof args[0] == 'string') {
          args[0] = PREFIX + args[0];
          return obj[key].apply(this, args);
        }
      };
    }
  };
  for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
    _loop();
  }
}
prefixAll(_redis["default"].RedisClient.prototype);
prefixAll(_redis["default"].Multi.prototype);
var _default = redisClient;
exports["default"] = _default;