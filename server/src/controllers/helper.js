const moment = require('moment');
import _ from 'lodash';

//write name of cell
function toCell(column, row) {
    let c = '';
    let n = column;
    do {
        n--;
        c = String.fromCharCode(65 + (n % 26)) + c;
        n = Math.floor(n / 26);
    } while (n)
    return c + row;
}

//get row number
function getRow(cell) {
    let sheet = Object.values(cell)[0];
    let workbook = Object.values(sheet)[1];
    let a = workbook.attributes;
    return a.r;
}

//get column number
function getColumn(cell, value) {
    let sheet = Object.values(cell)[0];
    let workbook = Object.values(sheet)[1];
    let a = workbook.children;
    let b;
    a.forEach((node) => {
        if (Object.values(node)[3] === value)
            b = Object.values(node)[1];
    })
    return b;
}

export {
    toCell,
    getRow,
    getColumn
}