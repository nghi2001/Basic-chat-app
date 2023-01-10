"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _glob = _interopRequireDefault(require("glob"));
var _path = _interopRequireDefault(require("path"));
var _koaCompose = _interopRequireDefault(require("koa-compose"));
//We need to convert list of separated route in to the one
//The block below does dynamic import all routers inside current directory.
var routers = [];
_glob["default"].sync(_path["default"].join(__dirname, 'router-*.js')).forEach(function (file) {
  var r = require(_path["default"].resolve(file))["default"];
  routers.push(r);
});

//So we extract the middelware from router
var middleware = [];
routers.forEach(function (router) {
  middleware.push(router.routes());
  middleware.push(router.allowedMethods());
});

//Then put them into one router. Magic here! 
var _default = (0, _koaCompose["default"])(middleware);
exports["default"] = _default;