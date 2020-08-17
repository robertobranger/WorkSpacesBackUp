"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerProfileErrors = void 0;
const Result_1 = require("../../../../base/logic/Result");
var GetPlayerProfileErrors;
(function (GetPlayerProfileErrors) {
    class PlayerDoesntExist extends Result_1.Result {
        constructor() {
            super(false, { message: 'User doesnt have tracked profile' });
        }
    }
    GetPlayerProfileErrors.PlayerDoesntExist = PlayerDoesntExist;
})(GetPlayerProfileErrors = exports.GetPlayerProfileErrors || (exports.GetPlayerProfileErrors = {}));
