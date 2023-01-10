"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = _interopRequireDefault(require("./db"));
var _sequelize = _interopRequireWildcard(require("sequelize"));
var _lodash = _interopRequireDefault(require("lodash"));
var _2 = require(".");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Emotion = _db["default"].define('Emotion', {
  id: {
    type: _sequelize["default"].UUID,
    defaultValue: _sequelize["default"].UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  status: {
    type: _sequelize["default"].INTEGER,
    defaultValue: _2.Enum.Emotion.STATUS_INTERRACTED.value,
    des: "Trạng thái"
  },
  type: {
    type: _sequelize["default"].INTEGER,
    defaultValue: _2.Enum.Emotion.TYPE_LIKE.value,
    des: "Loại tương tác"
  },
  member_id: {
    type: _sequelize["default"].INTEGER,
    des: "Id thành viên"
  },
  model_code: {
    type: _sequelize["default"].STRING,
    des: "Mã đối tượng"
  },
  obj_id: {
    type: _sequelize["default"].INTEGER,
    des: "Id đối tượng"
  },
  meta: {
    type: _sequelize["default"].JSONB,
    defaultValue: {},
    allowNull: true,
    des: "Thông tin thêm"
  }
}, {
  tableName: 'emotions',
  updatedAt: 'updated_at',
  createdAt: 'created_at',
  deletedAt: 'deleted_at',
  underscored: true,
  timestamps: true
});
//#region enum

function renderInclude() {
  return [{
    model: _2.Member,
    as: "member_info",
    attributes: ["id", "name"]
  }];
}
function renderIncludeList() {
  return [{
    model: _2.Member,
    as: "member_info",
    attributes: []
  }];
}
Emotion.getOne = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var condition, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          condition = {};
          condition.id = _db["default"].where(_db["default"].literal("(\"Emotion\".\"id\")::TEXT"), (0, _defineProperty2["default"])({}, _sequelize.Op.eq, id));
          _context.next = 4;
          return Emotion.findOne({
            include: renderInclude(),
            where: condition
          });
        case 4:
          data = _context.sent;
          return _context.abrupt("return", data || null);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
Emotion.getList = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(filter, pager) {
    var where, data, total;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          where = filter || {};
          _context2.next = 3;
          return Emotion.findAll(_lodash["default"].assign({
            where: where,
            include: renderIncludeList(),
            order: [["created_at", "DESC"]],
            attributes: [[_db["default"].literal("\"member_info\".\"id\""), "member_id"], [_db["default"].literal("\"member_info\".\"name\""), "member_name"], [_db["default"].literal("\"member_info\".\"images\"->'avatar'"), "member_avatar"]],
            raw: true,
            logging: false
          }, pager));
        case 3:
          data = _context2.sent;
          _context2.next = 6;
          return Emotion.count({
            where: where
          });
        case 6:
          total = _context2.sent;
          data = JSON.parse(JSON.stringify(data, null, " "));
          return _context2.abrupt("return", {
            total: total,
            data: data
          });
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var _default = Emotion;
exports["default"] = _default;