"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = __importDefault(require("express"));
const getPlayerProfile_1 = require("../../useCases/getPlayerProfile");
const profileRouter = express_1.default.Router();
exports.profileRouter = profileRouter;
profileRouter.get('/me', (req, res) => getPlayerProfile_1.getPlayerProfileController.execute(req, res));
