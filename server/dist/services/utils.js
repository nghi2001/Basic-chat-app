"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanNumber = cleanNumber;
exports.operatorFStr = operatorFStr;
exports.parseDate = parseDate;
exports.prettyDecimal = prettyDecimal;
exports.unaccent = unaccent;
var _sequelize = require("sequelize");
function cleanNumber(query) {
  query += "";
  return query.replace(/([+.\s_\-()]+)/g, '');
}
function unaccent(str) {
  var mark = ['ă', 'â', 'ê', 'ô', 'ư', 'ơ', 'Ă', 'Â', 'Ê', 'Ô', 'Ư', 'Ơ', 'đ', 'Đ', 'à', 'á', 'ả', 'ã', 'ạ', 'À', 'Á', 'Ả', 'Ã', 'Ạ', 'â', 'ầ', 'ấ', 'ẩ', 'ẫ', 'ậ', 'Â', 'Ầ', 'Ấ', 'Ẩ', 'Ẫ', 'Ậ', 'ă', 'ằ', 'ắ', 'ẳ', 'ẵ', 'ặ', 'Ă', 'Ằ', 'Ắ', 'Ẳ', 'Ẵ', 'Ặ', 'đ', 'Đ', 'ê', 'ề', 'ế', 'ể', 'ễ', 'ệ', 'Ê', 'Ề', 'Ế', 'Ể', 'Ễ', 'Ệ', 'ì', 'í', 'ỉ', 'ĩ', 'ị', 'Ì', 'Í', 'Ỉ', 'Ĩ', 'Ị', 'ò', 'ó', 'ỏ', 'õ', 'ọ', 'Ò', 'Ó', 'Ỏ', 'Õ', 'Ọ', 'ô', 'ồ', 'ố', 'ổ', 'ỗ', 'ộ', 'Ô', 'Ồ', 'Ố', 'Ổ', 'Ỗ', 'Ộ', 'ơ', 'ờ', 'ớ', 'ở', 'ỡ', 'ợ', 'Ơ', 'Ờ', 'Ớ', 'Ở', 'Ỡ', 'Ợ', 'ù', 'ú', 'ủ', 'ũ', 'ụ', 'Ù', 'Ú', 'Ủ', 'Ũ', 'Ụ', 'ư', 'ừ', 'ứ', 'ử', 'ữ', 'ự', 'Ư', 'Ừ', 'Ứ', 'Ử', 'Ữ', 'Ự', 'ỳ', 'ý', 'ỷ', 'ỹ', 'ỵ', 'Ỳ', 'Ý', 'Ỷ', 'Ỹ', 'Ỵ', '̀', '̉', '̃', '́', '̣'];
  var replace = ['a', 'a', 'e', 'o', 'u', 'o', 'A', 'A', 'E', 'O', 'U', 'O', 'd', 'D', 'a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A', 'A', 'A', 'd', 'D', 'e', 'e', 'e', 'e', 'e', 'e', 'E', 'E', 'E', 'E', 'E', 'E', 'i', 'i', 'i', 'i', 'I', 'I', 'I', 'I', 'I', 'I', 'o', 'o', 'o', 'o', 'o', 'O', 'O', 'O', 'O', 'O', 'o', 'o', 'o', 'o', 'o', 'o', 'O', 'O', 'O', 'O', 'O', 'O', 'o', 'o', 'o', 'o', 'o', 'o', 'O', 'O', 'O', 'O', 'O', 'O', 'u', 'u', 'u', 'u', 'u', 'U', 'U', 'U', 'U', 'U', 'u', 'u', 'u', 'u', 'u', 'u', 'U', 'U', 'U', 'U', 'U', 'U', 'y', 'y', 'y', 'y', 'y', 'Y', 'Y', 'Y', 'Y', 'Y', '', '', '', '', ''];
  str = str.replace(/./g, function (c, i) {
    var find = mark.indexOf(c);
    if (find >= 0) return replace[find];
    return c;
  });
  return str;
}
function operatorFStr(str) {
  switch (str) {
    case '>':
      return _sequelize.Op.gt;
    case '>=':
    case '=>':
      return _sequelize.Op.gte;
    case '<':
      return _sequelize.Op.lt;
    case '<=':
    case '=<':
      return _sequelize.Op.lte;
    case '=':
    default:
      return _sequelize.Op.eq;
  }
}

//
function prettyDecimal(value, precision_length) {
  precision_length = precision_length || 3;
  var roundedValue = Math.round(value * Math.pow(10, precision_length)) / Math.pow(10, precision_length);
  return roundedValue;
}
function parseDate(str) {
  var theDate = new Date(str);
  if (theDate == 'Invalid Date') {
    return null;
  }
  return theDate;
}