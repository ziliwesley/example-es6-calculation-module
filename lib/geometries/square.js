'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../utils/');

class Square {
    constructor(length) {
        this.length = length;
        this.temp = 123;
    }
    get perimeter() {
        (0, _utils.debug)(`Calc perimeter of square (r = ${ this.length })`);
        return this.length * 4;
    }
    get area() {
        (0, _utils.debug)(`Calc area of square (r = ${ this.length })`);
        return this.length * this.length;
    }
}
exports.default = Square;