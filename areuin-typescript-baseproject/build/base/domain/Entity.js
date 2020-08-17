"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(props, id) {
        this._id = id;
        this.props = props;
    }
    equals(object) {
        if (object === null || object === undefined) {
            return false;
        }
        if (!(object instanceof Entity)) {
            return false;
        }
        if (this === object) {
            return true;
        }
        return this._id.equals(object._id);
    }
}
exports.Entity = Entity;
