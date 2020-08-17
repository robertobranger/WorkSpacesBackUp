"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const shallow_equal_object_1 = require("shallow-equal-object");
class ValueObject {
    constructor(props) {
        this.props = Object.freeze(props);
    }
    equals(valueObject) {
        if (valueObject === null || valueObject === undefined) {
            return false;
        }
        if (valueObject.props === undefined) {
            return false;
        }
        return shallow_equal_object_1.shallowEqual(this.props, valueObject.props);
    }
}
exports.ValueObject = ValueObject;
