"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedAppError = void 0;
const Result_1 = require("./Result");
class UnexpectedAppError extends Result_1.Result {
    constructor(err) {
        super(false, {
            message: `An unexpected error ocurred`,
            error: err
        }, undefined);
        console.log(`[AppError]: An unexpected error ocurred`);
        console.log(err);
    }
    static create(err) {
        return new UnexpectedAppError(err);
    }
}
exports.UnexpectedAppError = UnexpectedAppError;
