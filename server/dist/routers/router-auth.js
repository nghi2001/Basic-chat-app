"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _koaRouter = _interopRequireDefault(require("koa-router"));
var _user = _interopRequireDefault(require("../models/mongo/user"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _helper = require("./helper");
var _fs = _interopRequireDefault(require("fs"));
var _config = require("../config");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var route = new _koaRouter["default"]();
route.post("/v1/login", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
    var _ctx$request$body, username, password, user, checkPassword, data, cert, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;
          _context.next = 3;
          return _user["default"].findOne({
            username: username
          });
        case 3:
          user = _context.sent;
          if (user) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", (0, _helper.renderErr)("Login", ctx, 404, "username"));
        case 6:
          _context.next = 8;
          return _bcrypt["default"].compareSync(password, user.password);
        case 8:
          checkPassword = _context.sent;
          if (checkPassword) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", (0, _helper.renderErr)("Login", ctx, 403, "password"));
        case 11:
          data = {
            id: user._id,
            name: user.name
          };
          _context.next = 14;
          return _fs["default"].readFileSync((0, _config.cfg)('JWT_PRIVATE_KEY', String));
        case 14:
          cert = _context.sent;
          token = _jsonwebtoken["default"].sign(data, cert, {
            algorithm: 'ES256'
          });
          ctx.body = {
            token: token,
            userInfo: data
          };
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var _default = route;
exports["default"] = _default;