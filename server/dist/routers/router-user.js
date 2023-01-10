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
var _jwtVerify = require("../middlewares/jwt-verify");
var _user2 = require("../controllers/user");
var route = new _koaRouter["default"]();
route.get("/v1/users", _jwtVerify.verifyToken, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
    var condition, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _user2.renderCondition)(ctx.query);
        case 2:
          condition = _context.sent;
          _context.next = 5;
          return _user["default"].find(condition);
        case 5:
          data = _context.sent;
          ctx.body = data;
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
route.post("/v1/users", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx) {
    var _ctx$request$body, name, username, password, dataInsert, checkData, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _ctx$request$body = ctx.request.body, name = _ctx$request$body.name, username = _ctx$request$body.username, password = _ctx$request$body.password;
          dataInsert = {
            password: _bcrypt["default"].hashSync(password, 10),
            username: username,
            name: name
          };
          if (!username) {
            _context2.next = 8;
            break;
          }
          _context2.next = 5;
          return _user["default"].findOne({
            username: username
          });
        case 5:
          checkData = _context2.sent;
          if (!checkData) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", (0, _helper.renderErr)("create user", ctx, 409, "username"));
        case 8:
          _context2.next = 10;
          return _user["default"].create(dataInsert);
        case 10:
          data = _context2.sent;
          ctx.body = data;
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = route;
exports["default"] = _default;