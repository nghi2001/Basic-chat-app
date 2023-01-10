"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCondition = renderCondition;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function renderCondition(_x) {
  return _renderCondition.apply(this, arguments);
}
function _renderCondition() {
  _renderCondition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query) {
    var name, condition;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          name = query.name;
          condition = {};
          if (name) {
            condition.name = name;
          }
          return _context.abrupt("return", condition);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _renderCondition.apply(this, arguments);
}