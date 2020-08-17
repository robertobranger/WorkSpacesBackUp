"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UinCoins = void 0;
const ValueObejct_1 = require("../../base/domain/ValueObejct");
const Result_1 = require("../../base/logic/Result");
class UinCoins extends ValueObejct_1.ValueObject {
    get ammount() {
        return this.props.ammount;
    }
    constructor(props) {
        super(props);
    }
    static create(ammount) {
        if (ammount < 0) {
            return Result_1.Result.fail('UinCoins ammounts must be positive');
        }
        if (!Number.isInteger(ammount)) {
            return Result_1.Result.fail('UinCoins need to be integers');
        }
        return Result_1.Result.ok(new UinCoins({ ammount: ammount }));
    }
    add(uinCoins) {
        const sum = this.ammount + uinCoins.ammount;
        return UinCoins.create(sum);
    }
    substract(uinCoins) {
        const substraction = this.ammount - uinCoins.ammount;
        const uinCoinsOrError = UinCoins.create(substraction);
        if (!uinCoinsOrError.isSuccess) {
            return Result_1.Result.fail('uinCoins cant be a negative number ');
        }
        return uinCoinsOrError;
    }
}
exports.UinCoins = UinCoins;
