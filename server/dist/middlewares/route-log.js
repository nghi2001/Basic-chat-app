"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _logger = require("../services/logger");
var logger = (0, _logger.getLogger)('router');
function routeLog(_x, _x2) {
  return _routeLog.apply(this, arguments);
}
function _routeLog() {
  _routeLog = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var startTime, sign, error, ms;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          startTime = Date.now();
          sign = '<->';
          error = null;
          _context.prev = 3;
          _context.next = 6;
          return next();
        case 6:
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](3);
          sign = 'xxx';
          error = _context.t0;
        case 12:
          ms = Date.now() - startTime;
          logger.http("".concat(sign, " ").concat(ctx.request.method.toUpperCase().padStart(6, ' '), "[").concat(error ? error.status : ctx.response.status, "] - ").concat(ms, "ms - ").concat(ctx.request.url));
          if (null !== error) {
            ctx["throw"](error.status, error.message);
          }
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 8]]);
  }));
  return _routeLog.apply(this, arguments);
}
var _default = routeLog;
exports["default"] = _default;