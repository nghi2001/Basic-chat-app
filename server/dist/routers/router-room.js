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
var _jwtVerify = require("../middlewares/jwt-verify");
var _helper = require("./helper");
var _config = require("../config");
var _room = _interopRequireDefault(require("../models/mongo/room"));
var _room2 = require("../controllers/room");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var route = new _koaRouter["default"]();
route.get("/v1/rooms/:id", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var id, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = ctx.params.id;
          _context.next = 3;
          return _room["default"].findById(id);
        case 3:
          data = _context.sent;
          ctx.body = data;
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
route.get("/v1/rooms", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx) {
    var conditon, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _room2.renderCondition)(ctx.query);
        case 2:
          conditon = _context2.sent;
          _context2.next = 5;
          return _room["default"].find(conditon);
        case 5:
          data = _context2.sent;
          ctx.body = data;
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}());
route.post("/v1/rooms", _jwtVerify.verifyToken, /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx, next) {
    var _ctx$request$body, members, name, users, _iterator, _step, user, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _ctx$request$body = ctx.request.body, members = _ctx$request$body.members, name = _ctx$request$body.name;
          _context3.next = 3;
          return _user["default"].find({
            _id: {
              "$in": members
            }
          }).select(["_id"]);
        case 3:
          users = _context3.sent;
          members = [];
          _iterator = _createForOfIteratorHelper(users);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              user = _step.value;
              members.push({
                user_id: user._id
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _context3.next = 9;
          return _room["default"].create({
            name: name,
            members: members
          });
        case 9:
          data = _context3.sent;
          ctx.body = data;
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());
// route.put("/v1/rooms/:id", verifyToken, async (ctx, next) => {
//     let {
//         name,
//         members
//     } = ctx.request.body;
//     let id = ctx.params.id;
//     let room = await Room.findById(id);
//     if(!room) {
//         return renderErr("Update room", ctx, 404, "id");
//     }

// })
var _default = route;
exports["default"] = _default;