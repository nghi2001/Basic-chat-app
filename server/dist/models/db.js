"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _config = require("../config");
var _logger = require("../services/logger");
var logger = (0, _logger.getLogger)('database');
var DB = new _sequelize["default"]((0, _config.cfg)('DB_NAME'), (0, _config.cfg)('DB_USERNAME'), (0, _config.cfg)('DB_PASSWORD'), {
  host: (0, _config.cfg)('DB_HOST'),
  dialect: (0, _config.cfg)('DB_DRIVER'),
  port: (0, _config.cfg)('DB_PORT'),
  dialectOptions: {
    useUTC: false //for reading from database
  },

  timezone: (0, _config.cfg)('DB_TIMEZONE'),
  //for writing to database
  logging: (0, _config.cfg)('DB_LOGGING') ? logger.sql : false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
DB.authenticate().then(function () {
  logger.info("Connection DB(".concat((0, _config.cfg)('DB_DRIVER'), ") has been established successfully."));
})["catch"](function (err) {
  logger.error("DB(".concat((0, _config.cfg)('DB_DRIVER'), ") Unable to connect to the database: \n%o"), err);
});
var _default = DB;
exports["default"] = _default;