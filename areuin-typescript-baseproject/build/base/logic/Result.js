"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(isSuccess, error, value) {
        if (isSuccess && error) {
            throw new Error("InvalidOperation: result can't be sucesfull and have an error");
        }
        if (!isSuccess && !error) {
            throw new Error('InvalidOperation: failed results need to contain respective error');
        }
        this.isSuccess = isSuccess;
        this.error = error;
        this._value = value;
        Object.freeze(this);
    }
    static ok(value) {
        return new Result(true, undefined, value);
    }
    static fail(error) {
        return new Result(false, error);
    }
    getValue() {
        if (!this.isSuccess) {
            console.log(this.error);
            throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
        }
        return this._value;
    }
    errorValue() {
        return this.error;
    }
    static combine(results) {
        for (const result of results) {
            if (!result.isSuccess)
                return result;
        }
        return Result.ok();
    }
}
exports.Result = Result;
