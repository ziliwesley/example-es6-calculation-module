'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.factorialAsync = exports.factorial = exports.Square = exports.Circle = undefined;

var _geometries = require('./geometries/');

var _algebra = require('./algebra/');

exports.Circle = _geometries.Circle;
exports.Square = _geometries.Square;
exports.factorial = _algebra.factorial;
exports.factorialAsync = _algebra.factorialAsync;