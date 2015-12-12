'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _costants = require('../costants/');

var _utils = require('../utils/');

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get perimeter() {
        (0, _utils.debug)(`Calc perimeter of circle (r = ${ this.radius })`);
        return _costants.PI * this.radius * 2;
    }
    get area() {
        (0, _utils.debug)(`Calc area of circle (r = ${ this.radius })`);
        return _costants.PI * this.radius * this.radius;
    }
}
exports.default = Circle;