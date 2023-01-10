"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _koaRouter = _interopRequireDefault(require("koa-router"));
var route = new _koaRouter["default"]();
route.get("/", function (ctx) {
  ctx.body = "Hello";
});
var _default = route;
exports["default"] = _default;