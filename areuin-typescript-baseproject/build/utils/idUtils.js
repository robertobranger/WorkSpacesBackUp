"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idUtils = void 0;
const moment = __importStar(require("moment"));
const uuid_1 = require("uuid");
class idUtils {
    // This id is much more expensive to sort than UUID
    static GenerateTimestampRandomID() {
        const timestamp = BigInt(moment.now());
        const randomNumber = BigInt(Math.floor(Math.random() * 10 ** idUtils.RANDOM_SECTION_LENGTH));
        return timestamp * 10n ** BigInt(idUtils.RANDOM_SECTION_LENGTH) + randomNumber;
    }
    static isTimestampRandomId(id) {
        if (!id) {
            return false;
        }
        return id > (10n ^ BigInt(moment.now.toString().length + idUtils.RANDOM_SECTION_LENGTH));
    }
    static GenerateUUID() {
        return uuid_1.v4();
    }
    static isUUID(id) {
        if (!id) {
            return false;
        }
        return new RegExp('[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}').test(id.toString());
    }
}
exports.idUtils = idUtils;
idUtils.RANDOM_SECTION_LENGTH = 11;
