"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlayerProfileErrors = void 0;
const Result_1 = require("../../../../base/logic/Result");
var UpdatePlayerProfileErrors;
(function (UpdatePlayerProfileErrors) {
    class WrongDataFormat extends Result_1.Result {
        constructor() {
            super(false, { message: 'A correct UpdatePlayerDTO must be supplied' });
        }
    }
    UpdatePlayerProfileErrors.WrongDataFormat = WrongDataFormat;
})(UpdatePlayerProfileErrors = exports.UpdatePlayerProfileErrors || (exports.UpdatePlayerProfileErrors = {}));
