"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerProfile = void 0;
const Result_1 = require("../../../../base/logic/Result");
class GetPlayerProfile {
    constructor(playerProfileRepo) {
        this.playerProfileRepo = playerProfileRepo;
    }
    async execute() {
        const playerProfile = await this.playerProfileRepo.getByPlayerID();
        return Result_1.Result.ok(playerProfile);
    }
}
exports.GetPlayerProfile = GetPlayerProfile;
