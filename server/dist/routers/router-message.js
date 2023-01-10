"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _koaRouter = _interopRequireDefault(require("koa-router"));
var _message = _interopRequireDefault(require("../models/mongo/message"));
var _room = _interopRequireDefault(require("../models/mongo/room"));
var _jwtVerify = require("../middlewares/jwt-verify");
var _helper = require("./helper");
var _message2 = require("../controllers/message");
var _socket = _interopRequireDefault(require("../services/socket"));
var route = new _koaRouter["default"]();
route.get("/v1/message", _jwtVerify.verifyToken, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var idUser, condition, room, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          idUser = ctx.state.user.id;
          _context.next = 3;
          return (0, _message2.renderCondition)(ctx.query);
        case 3:
          condition = _context.sent;
          if (!ctx.query.room_id) {
            _context.next = 12;
            break;
          }
          _context.next = 7;
          return _room["default"].findOne({
            id: ctx.query.room_id,
            members: {
              "$elemMatch": {
                user_id: idUser
              }
            }
          });
        case 7:
          room = _context.sent;
          if (room) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", (0, _helper.renderErr)("Get List Message", ctx, 403, "room_id"));
        case 10:
          _context.next = 13;
          break;
        case 12:
          return _context.abrupt("return", ctx.body = []);
        case 13:
          _context.next = 15;
          return _message["default"].find(condition).populate("user_id", "_id name");
        case 15:
          data = _context.sent;
          ctx.body = data;
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
route.post("/v1/message", _jwtVerify.verifyToken, /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx, next) {
    var user_id, _ctx$request$body, room_id, message, room, newMessage, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          user_id = ctx.state.user.id;
          _ctx$request$body = ctx.request.body, room_id = _ctx$request$body.room_id, message = _ctx$request$body.message;
          _context2.next = 4;
          return _room["default"].findById(room_id);
        case 4:
          room = _context2.sent;
          if (room) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", (0, _helper.renderErr)("create message", ctx, 404, "room_id"));
        case 7:
          _context2.next = 9;
          return _message["default"].create({
            room_id: room_id,
            user_id: user_id,
            message: message
          });
        case 9:
          newMessage = _context2.sent;
          _context2.next = 12;
          return _message["default"].findById(newMessage._id).populate("user_id");
        case 12:
          data = _context2.sent;
          _socket["default"].newMessage(data, room_id);
          ctx.body = data;
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
route["delete"]("/v1/message/:id", _jwtVerify.verifyToken, /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx, next) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _message["default"].deleteOne({
            _id: ctx.params.id
          });
        case 2:
          result = _context3.sent;
          return _context3.abrupt("return", result);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = route;
exports["default"] = _default;