"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = require("../../config");
console.log("mongodb://".concat((0, _config.cfg)("DB_HOST"), ":").concat((0, _config.cfg)("DB_PORT"), "/chat"));
_mongoose["default"].connect("mongodb://".concat((0, _config.cfg)("DB_HOST"), ":").concat((0, _config.cfg)("DB_PORT"), "/chat")).then(function () {
  console.log("db connected");
})["catch"](function (err) {
  return console.log(err);
});
var _default = _mongoose["default"];
exports["default"] = _default;