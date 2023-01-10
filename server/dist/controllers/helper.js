"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumn = getColumn;
exports.getRow = getRow;
exports.toCell = toCell;
var _lodash = _interopRequireDefault(require("lodash"));
var moment = require('moment');
//write name of cell
function toCell(column, row) {
  var c = '';
  var n = column;
  do {
    n--;
    c = String.fromCharCode(65 + n % 26) + c;
    n = Math.floor(n / 26);
  } while (n);
  return c + row;
}

//get row number
function getRow(cell) {
  var sheet = Object.values(cell)[0];
  var workbook = Object.values(sheet)[1];
  var a = workbook.attributes;
  return a.r;
}

//get column number
function getColumn(cell, value) {
  var sheet = Object.values(cell)[0];
  var workbook = Object.values(sheet)[1];
  var a = workbook.children;
  var b;
  a.forEach(function (node) {
    if (Object.values(node)[3] === value) b = Object.values(node)[1];
  });
  return b;
}