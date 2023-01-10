"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = verifyToken;
exports.verifyTokenSocket = verifyTokenSocket;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config");
var _user = _interopRequireDefault(require("../models/mongo/user"));
var _file = require("../services/file");
function verifyTokenSocket(_x, _x2) {
  return _verifyTokenSocket.apply(this, arguments);
}
function _verifyTokenSocket() {
  _verifyTokenSocket = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(socket, next) {
    var token, pubCert, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          token = socket.handshake.auth.token;
          if (!(token != "null")) {
            _context.next = 10;
            break;
          }
          _context.next = 4;
          return (0, _file.readFileAsync)((0, _config.cfg)('JWT_PUBLIC_KEY'), String);
        case 4:
          pubCert = _context.sent;
          data = _jsonwebtoken["default"].verify(token, pubCert, {
            algorithms: "ES256"
          });
          socket.handshake.user = data;
          next();
          _context.next = 12;
          break;
        case 10:
          console.log('-----------------FALSE');
          socket.disconnect(true);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _verifyTokenSocket.apply(this, arguments);
}
function verifyToken(_x3, _x4) {
  return _verifyToken.apply(this, arguments);
}
function _verifyToken() {
  _verifyToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx, next) {
    var tokenInQuery, parts, scheme, credentials, pubCert, trustedData, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          tokenInQuery = ctx.request.query.token;
          if (ctx.header && !ctx.header.authorization) {
            ctx.header.authorization = "";
          }
          parts = null;
          if (tokenInQuery) {
            parts = ['Bearer', tokenInQuery];
          } else {
            parts = ctx.request.header.authorization.split(' ');
          }
          if (!(parts.length === 2)) {
            _context2.next = 28;
            break;
          }
          scheme = parts[0];
          credentials = parts[1];
          if (!/^Bearer$/i.test(scheme)) {
            _context2.next = 25;
            break;
          }
          _context2.next = 10;
          return (0, _file.readFileAsync)((0, _config.cfg)('JWT_PUBLIC_KEY'), String);
        case 10:
          pubCert = _context2.sent;
          _context2.prev = 11;
          trustedData = _jsonwebtoken["default"].verify(credentials, pubCert, {
            algorithms: 'ES256'
          });
          _context2.next = 15;
          return _user["default"].findById(trustedData.id);
        case 15:
          user = _context2.sent;
          if (!user) {
            ctx["throw"](401, 'Authentication Error');
          }
          ctx.state = {
            user: trustedData
          };
          _context2.next = 23;
          break;
        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](11);
          ctx["throw"](401, 'Authentication Error');
        case 23:
          _context2.next = 26;
          break;
        case 25:
          ctx["throw"](401, 'Bad Authorization header format. Format is "Authorization: Bearer <token>"');
        case 26:
          _context2.next = 29;
          break;
        case 28:
          ctx["throw"](401, 'Bad Authorization header format. Format is "Authorization: Bearer <token>"');
        case 29:
          _context2.next = 31;
          return next();
        case 31:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[11, 20]]);
  }));
  return _verifyToken.apply(this, arguments);
}