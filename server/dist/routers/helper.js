"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPager = void 0;
exports.filterFromToCreated = filterFromToCreated;
exports.paging = paging;
exports.renderErr = renderErr;
exports.renderLog = renderLog;
exports.renderLogInfoMember = renderLogInfoMember;
exports.renderLogInfoUser = renderLogInfoUser;
exports.renderLogModel = renderLogModel;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _moment = _interopRequireDefault(require("moment"));
var _paralidate = _interopRequireDefault(require("paralidate"));
var _sequelize = require("sequelize");
function paging(filters) {
  var options = {};
  if (filters.perPage && !isNaN(filters.perPage)) {
    options.limit = filters.perPage > 100 ? 100 : filters.perPage * 1;
    if (filters.full == "true") {
      options.limit = filters.perPage * 1;
    }
  } else {
    options.limit = 20; //default 20 items perPage
  }

  if (filters.page > 0) {
    options.offset = (filters.page - 1) * options.limit;
  } else {
    options.offset = 0;
  }
  return options;
}
var checkPager = (0, _paralidate["default"])({
  page: {
    type: 'int',
    required: false
  },
  perPage: {
    type: 'int',
    required: false
  }
}, {
  box: 'query',
  outputType: 'json'
});
exports.checkPager = checkPager;
function filterFromToCreated(created_from, created_to, where) {
  if (created_from) {
    var dateFrom = new Date(created_from + ' 00:00:00');
    if (dateFrom != 'Invalid Date') {
      where.created_at = (0, _defineProperty2["default"])({}, _sequelize.Op.gte, dateFrom);
    }
  }
  if (created_to) {
    var dateTo = new Date(created_to + ' 23:59:59');
    if (dateTo != 'Invalid Date') {
      where.created_at = (0, _defineProperty2["default"])({}, _sequelize.Op.lte, dateTo);
    }
  }
  if (created_from && created_to) {
    var _dateFrom = new Date(created_from + ' 00:00:00');
    var _dateTo = new Date(created_to + ' 23:59:59');
    if (_dateFrom != 'Invalid Date' && _dateTo != 'Invalid Date') {
      where.created_at = (0, _defineProperty2["default"])({}, _sequelize.Op.between, [_dateFrom, _dateTo]);
    }
  }
  return where;
}
function renderErr(where, ctx, status, field, type, check_type) {
  ctx.status = status;
  if (status == 404) {
    ctx.body = [{
      type: where,
      message: "Not Found",
      code: "Not Found",
      field: field
    }];
  }
  if (status == 409) {
    ctx.body = [{
      type: where,
      message: "Duplicated",
      code: "Conflict",
      field: field,
      data: type
    }];
  }
  if (status == 403) {
    ctx.body = [{
      type: where,
      message: field || "Permission",
      code: "Permission"
    }];
  }
  if (status == 500) {
    ctx.body = [{
      type: where,
      message: "Internal Server Error",
      code: "Internal",
      field: field
    }];
  }
  if (status == 400) {
    var code = "invalid";
    var message = "shoud be a :" + check_type;
    var field_sent = field;
    if (type == 2) {
      code = "missing_field";
      message = "required";
    }
    ctx.body = [{
      type: where,
      message: message,
      code: code || '',
      field: field_sent
    }];
  }
  return ctx;
}
function renderLogInfoMember(flagDate, member_id, column, old_data, new_data, type_creator, creator_info, reason, desc) {
  var data = {
    member_id: member_id || null,
    column: column || null,
    old_data: old_data || null,
    new_data: new_data || null,
    type_creator: type_creator || null,
    creator_info: creator_info || null,
    reason: reason || null,
    desc: desc || null
  };
  if (flagDate) {
    data.created_at = (0, _moment["default"])(new Date()).format("YYYY-MM-DD HH:mm:ss");
  }
  return data;
}
function renderLogInfoUser(flagDate, user_id, column, old_data, new_data, type_creator, creator_info, reason, desc) {
  var data = {
    user_id: user_id || null,
    column: column || null,
    old_data: old_data || null,
    new_data: new_data || null,
    type_creator: type_creator || null,
    creator_info: creator_info || null,
    reason: reason || null,
    desc: desc || null
  };
  if (flagDate) {
    data.created_at = (0, _moment["default"])(new Date()).format("YYYY-MM-DD HH:mm:ss");
  }
  return data;
}
function renderLog(column, old_data, new_data, type_creator, creator_info, reason, desc) {
  var data = {
    column: column || null,
    old_data: old_data || null,
    new_data: new_data || null,
    type_creator: type_creator || null,
    creator_id: creator_info ? creator_info.id : null,
    creator_info: creator_info || null,
    reason: reason || null,
    desc: desc || null,
    created_at: (0, _moment["default"])(new Date()).format("YYYY-MM-DD HH:mm:ss")
  };
  return data;
}
function renderLogModel(column, old_data, new_data, type_creator, creator_info, reason, desc) {
  var data = {
    column: column || null,
    old_data: old_data || null,
    new_data: new_data || null,
    type_creator: type_creator || null,
    creator_id: creator_info ? creator_info.id : null,
    creator_info: creator_info || null,
    reason: reason || null,
    desc: desc || null
  };
  return data;
}