"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFileAsync = exports.unlinkAsync = exports.readFileAsync = exports.fstat = void 0;
var _bluebird = _interopRequireDefault(require("bluebird"));
var _fs = _interopRequireDefault(require("fs"));
var readFileAsync = _bluebird["default"].promisify(_fs["default"].readFile);
exports.readFileAsync = readFileAsync;
var writeFileAsync = _bluebird["default"].promisify(_fs["default"].writeFile);
exports.writeFileAsync = writeFileAsync;
var unlinkAsync = _bluebird["default"].promisify(_fs["default"].unlink);
exports.unlinkAsync = unlinkAsync;
var fstat = _bluebird["default"].promisify(_fs["default"].stat);
exports.fstat = fstat;