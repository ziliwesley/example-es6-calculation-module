'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.factorialAsync = exports.factorial = undefined;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _utils = require('../utils/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function factorial(n) {
    (0, _utils.debug)(`Calc factorial of ${ n }`);
    return n === 1 ? 1 : n * factorial(n - 1);
}

function factorialAsync(n) {
    (0, _utils.debug)(`Calc factorial of ${ n }`);
    return n === 1 ? _bluebird2.default.resolve(1) : factorialAsync(n - 1).then(res => {
        return res * n;
    });
}

exports.factorial = factorial;
exports.factorialAsync = factorialAsync;