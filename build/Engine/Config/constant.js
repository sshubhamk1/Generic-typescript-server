"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname + "../../../../.env") });
exports.config = {
    PORT: process.env.PORT || 5000,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "iamshubham",
    JWT_TOKEN_EXPIRY_IN_HRS: process.env.JWT_TOKEN_EXPIRY_IN_HRS || "1",
    HOST: process.env.HOST || "localhost",
    ENV: process.env.ENV || "ts",
};
