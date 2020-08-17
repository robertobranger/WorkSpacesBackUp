"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakePlayerProfileRepo = void 0;
const fakePlayerProfileMapper_1 = require("../../mappers/fakePlayerProfileMapper");
class FakePlayerProfileRepo {
    constructor(models) {
        this.models = models;
    }
    async exists(playerID) {
        return !!(playerID + this.models);
    }
    async save(playerProfile) {
        return playerProfile;
    }
    async update() {
        return false;
    }
    async getByPlayerID() {
        return new Promise((resolve, reject) => {
            if (!testDTO) {
                reject('FakeRepo Promise rejected');
            }
            resolve(fakePlayerProfileMapper_1.FakePlayerProfileMapper.fromPersistance());
        });
    }
}
exports.FakePlayerProfileRepo = FakePlayerProfileRepo;
