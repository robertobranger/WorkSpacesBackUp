"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerID = void 0;
const ValueObejct_1 = require("../../../base/domain/ValueObejct");
const Guard_1 = require("../../../base/logic/Guard");
const Result_1 = require("../../../base/logic/Result");
const idUtils_1 = require("../../../utils/idUtils");
class PlayerID extends ValueObejct_1.ValueObject {
    get id() {
        return this.props.id;
    }
    constructor(id) {
        super(id);
    }
    static create(id) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined({ argument: id, argumentName: 'id' });
        if (!guardResult.succeeded && guardResult.message) {
            return Result_1.Result.fail(guardResult.message);
        }
        const isIdUUID = idUtils_1.idUtils.isUUID(id.toString());
        if (!isIdUUID) {
            return Result_1.Result.fail('id must be an UUID for PlayerIDs');
        }
        return Result_1.Result.ok(new PlayerID({ id }));
    }
}
exports.PlayerID = PlayerID;
