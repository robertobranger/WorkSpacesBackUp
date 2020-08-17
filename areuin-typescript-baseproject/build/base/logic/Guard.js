"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
class Guard {
    static againstNullOrUndefined(guardArguments) {
        if (guardArguments.argument === null || guardArguments.argument === undefined) {
            return {
                succeeded: false,
                message: `${guardArguments.argumentName} is null or undefined`
            };
        }
        else {
            return { succeeded: true };
        }
    }
    static againstNullOrUndefinedBulk(guardArguments) {
        for (const argument of guardArguments) {
            const result = this.againstNullOrUndefined(argument);
            if (!result.succeeded)
                return result;
        }
        return { succeeded: true };
    }
    static againstAtLeast(numChars, text) {
        return text.length >= numChars
            ? { succeeded: true }
            : {
                succeeded: false,
                message: `Text is not at least ${numChars} chars.`
            };
    }
    static againstAtMost(numChars, text) {
        return text.length <= numChars
            ? { succeeded: true }
            : {
                succeeded: false,
                message: `Text is greater than ${numChars} chars.`
            };
    }
    static inRange(num, min, max, argumentName) {
        const isInRange = num >= min && num <= max;
        if (!isInRange) {
            return {
                succeeded: false,
                message: `${argumentName} is not within range ${min} to ${max}.`
            };
        }
        else {
            return { succeeded: true };
        }
    }
    static allInRange(numbers, min, max, argumentName) {
        let failingResult = null;
        for (const num of numbers) {
            const numIsInRangeResult = this.inRange(num, min, max, argumentName);
            if (!numIsInRangeResult.succeeded)
                failingResult = numIsInRangeResult;
        }
        if (failingResult) {
            return { succeeded: false, message: `${argumentName} is not within the range.` };
        }
        else {
            return { succeeded: true };
        }
    }
    static isOneOf(value, validValues, argumentName) {
        let isValid = false;
        for (const validValue of validValues) {
            if (value === validValue) {
                isValid = true;
            }
        }
        if (isValid) {
            return { succeeded: true };
        }
        else {
            return {
                succeeded: false,
                message: `${argumentName} isn't oneOf the correct types in ${JSON.stringify(validValues)}. Got "${value}".`
            };
        }
    }
    static combine(guardResults) {
        for (const result of guardResults) {
            if (result.succeeded === false)
                return result;
        }
        return { succeeded: true };
    }
}
exports.Guard = Guard;
