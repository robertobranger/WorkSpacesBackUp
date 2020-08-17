"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPresent = exports.isAbssent = void 0;
function isAbssent(value) {
    return value === null || value === undefined;
}
exports.isAbssent = isAbssent;
function isPresent(value) {
    return !isAbssent(value);
}
exports.isPresent = isPresent;
