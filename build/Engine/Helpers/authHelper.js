"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constant_1 = require("../Config/constant");
exports.generateToken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return jsonwebtoken_1.default.sign(payload, `${constant_1.config.JWT_SECRET_KEY}`, {
        expiresIn: `${constant_1.config.JWT_TOKEN_EXPIRY_IN_HRS}h`,
    });
});
exports.getToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth_token = req.header("Authorization");
        if (!auth_token) {
            throw "Please provide a token";
        }
        const verifiedToken = jsonwebtoken_1.default.verify(auth_token, `${constant_1.config.JWT_SECRET_KEY}`);
        return verifiedToken;
    }
    catch (e) {
        return res.status(400).json({ error: true, msg: String(e) });
    }
});
