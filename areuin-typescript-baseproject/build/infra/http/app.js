"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const v1_1 = require("./api/v1");
// Import Environment
const app = express_1.default();
const origin = { origin: 'http:areuin.com' }; //Check This.
// Middlewares
app.use(cors_1.default(origin));
app.use('/api/v1', v1_1.v1Router);
// New api verisions
const port = process.env.PORT;
app.listen(port, () => console.log(`[App]: Server listening on ${port}`));
