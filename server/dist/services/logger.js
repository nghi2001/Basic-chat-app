"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getLogger = getLogger;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _winston = require("winston");
var _moment = _interopRequireDefault(require("moment"));
var _config = require("../config");
var combine = _winston.format.combine,
  colorize = _winston.format.colorize,
  timestamp = _winston.format.timestamp,
  splat = _winston.format.splat,
  printf = _winston.format.printf,
  align = _winston.format.align;
var logLevels = {
  levels: {
    error: 0,
    warn: 1,
    sql: 2,
    http: 3,
    info: 4,
    debug: 5
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    sql: "blue",
    http: "cyan",
    debug: "magenta"
  }
};
(0, _winston.addColors)(logLevels.colors);
var LOG_LEVEL = (0, _config.cfg)('APP_LOG_LEVEL');
var myFormat = printf(function (info) {
  var timestamp = info.timestamp,
    level = info.level,
    label = info.label,
    message = info.message;
  label = label || '';
  timestamp = (0, _moment["default"])(timestamp).format('YYYY-MM-DD HH:mm:ss');
  return "".concat(timestamp, " [").concat(level, "] ").concat(label.toUpperCase(), ": ").concat(message);
});
var logger = (0, _winston.createLogger)({
  levels: logLevels.levels,
  transports: [new _winston.transports.Console({
    level: LOG_LEVEL,
    format: combine(colorize(), timestamp(), align(), splat(), myFormat)
  }), new _winston.transports.File({
    level: 'error',
    filename: (0, _config.cfg)('APP_FILE_ERROR_LOG'),
    format: combine(timestamp(), align(), splat(), myFormat)
  }), new _winston.transports.File({
    filename: (0, _config.cfg)('APP_FILE_COMBINED_LOG'),
    level: 'info',
    format: combine(timestamp(), align(), splat(), myFormat)
  })]
});
if (LOG_LEVEL == 'debug') {
  logger.add(new _winston.transports.File({
    level: 'debug',
    filename: (0, _config.cfg)('APP_FILE_DEBUG_LOG'),
    format: combine(timestamp(), splat(), myFormat)
  }));
}
function getLogger() {
  var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var levels = Object.keys(logLevels.levels);
  var funcs = {};
  var _loop = function _loop(i) {
    funcs[levels[i]] = function (message) {
      var _logger$log;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var meta = args[args.length - 1];
      if ((0, _typeof2["default"])(meta) == 'object' && meta.hasOwnProperty('label')) {
        label = meta.label;
      }
      logger.log((_logger$log = {
        level: levels[i],
        message: message
      }, (0, _defineProperty2["default"])(_logger$log, Symbol["for"]('splat'), args), (0, _defineProperty2["default"])(_logger$log, "label", label), _logger$log));
    };
  };
  for (var i = 0; i < levels.length; i++) {
    _loop(i);
  }
  funcs.log = function () {
    logger.log.apply(logger, arguments);
  };
  return funcs;
}
var _default = logger;
exports["default"] = _default;