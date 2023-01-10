"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _config = require("../config");
var _kcors = _interopRequireDefault(require("kcors"));
function checkOriginAgainstWhitelist(ctx) {
  var requestOrigin = ctx.accept.headers.origin;
  if ((0, _config.cfg)('WHITELIST', JSON.parse).includes('*')) {
    return '*';
  }
  if (!(0, _config.cfg)('WHITELIST', JSON.parse).includes(requestOrigin)) {
    if (requestOrigin.search(/(http|https)/) === 0) {
      return ctx["throw"]("".concat(requestOrigin, " is not a valid origin"));
    } else {
      //allow if it is an application. not web page
      return null;
    }
  }
  return requestOrigin;
}
var _default = (0, _kcors["default"])({
  origin: checkOriginAgainstWhitelist
});
exports["default"] = _default;