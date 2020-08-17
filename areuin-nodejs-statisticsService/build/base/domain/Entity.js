"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const UniqueEntityID_1 = require("./UniqueEntityID");
class Entity {
    constructor(props, id) {
        this._id = id ? id : new UniqueEntityID_1.UniqueEntityID();
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
