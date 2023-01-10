"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cfg = void 0;
exports.get_config = get_config;
var _config = _interopRequireDefault(require("dotenv/config"));
var _path = _interopRequireDefault(require("path"));
/**
 * Get config value from ENV
 * @param {String} keyName 
 * @param {Function} parseFunc Input the function that need to parse data: parseInt, parseFloat, string, JSON.parse
 */
function get_config(keyName, parseFunc) {
  if (!parseFunc) return process.env[keyName];
  return parseFunc(process.env[keyName]);
}
var cfg = get_config;
exports.cfg = cfg;