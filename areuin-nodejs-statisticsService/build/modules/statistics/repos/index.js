"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakePlayerProfileRepo = void 0;
const fakePlayerProfileRepo_1 = require("./implementations/fakePlayerProfileRepo");
const fakePlayerProfileRepo = new fakePlayerProfileRepo_1.FakePlayerProfileRepo('useless string');
exports.fakePlayerProfileRepo = fakePlayerProfileRepo;
