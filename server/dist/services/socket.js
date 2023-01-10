"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _jwtVerify = require("../middlewares/jwt-verify");
var _room = _interopRequireDefault(require("../models/mongo/room"));
var _lodash = _interopRequireDefault(require("lodash"));
var Socket = /*#__PURE__*/function () {
  function Socket() {
    (0, _classCallCheck2["default"])(this, Socket);
    this.users = new Map();
    this.roomPrefix = "room:";
  }
  (0, _createClass2["default"])(Socket, [{
    key: "connection",
    value: function () {
      var _connection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(socket) {
        var _this = this;
        var userId, rooms, setUser, _setUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log("New connection ".concat(socket.id, " at instance ").concat(process.pid));
              userId = socket.handshake.user.id;
              _context.next = 4;
              return _room["default"].find({
                members: {
                  "$elemMatch": {
                    user_id: userId
                  }
                }
              }).select("_id");
            case 4:
              rooms = _context.sent;
              rooms = _lodash["default"].map(rooms, function (e) {
                return _this.roomPrefix + e.id;
              });
              if (!this.users.get(this.roomPrefix + userId)) {
                setUser = new Set();
                setUser.add(socket.id);
                this.users.set(this.roomPrefix + userId, setUser);
              } else {
                _setUser = this.users.get(this.roomPrefix + userId);
                _setUser.add(socket.id);
                this.users.set(this.roomPrefix + userId, _setUser);
              }
              socket.join(this.roomPrefix + userId);
              socket.join(rooms);
              socket.on("disconnect", function () {
                var setUser = _this.users.get(_this.roomPrefix + userId);
                if (setUser) {
                  setUser["delete"](socket.id);
                }
                if (_this.users.get(_this.roomPrefix + userId) && _this.users.get(_this.roomPrefix + userId).size <= 0) {
                  _this.users["delete"](_this.roomPrefix + userId);
                }
                socket.disconnect(true);
                console.log("User disconnect id is ".concat(socket.id));
              });
              socket.on("new-message", function (data) {
                console.log(data);
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function connection(_x) {
        return _connection.apply(this, arguments);
      }
      return connection;
    }()
  }, {
    key: "newMessage",
    value: function newMessage(data, roomId, userId) {
      _io.to("".concat(this.roomPrefix).concat(roomId)).emit("new-message", data);
    }
  }]);
  return Socket;
}();
var _default = new Socket();
exports["default"] = _default;