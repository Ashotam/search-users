"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
dotenv_1.default.config({ path: (0, path_1.resolve)(__dirname, '../.env') });
const config = {
    PORT: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '5000',
    MONGODB_URI: (_b = process.env.MONGODB_URI) !== null && _b !== void 0 ? _b : "",
};
exports.config = config;
