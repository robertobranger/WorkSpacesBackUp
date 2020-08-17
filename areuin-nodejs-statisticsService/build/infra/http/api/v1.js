"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("../../../modules/statistics/http/routes");
const v1Router = express_1.default.Router();
exports.v1Router = v1Router;
v1Router.get('/', (req, res) => {
    return res.json({ message: 'Up' });
});
v1Router.use('/profile', routes_1.profileRouter);
