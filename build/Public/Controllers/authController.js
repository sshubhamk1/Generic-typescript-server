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
exports.postSignup = exports.postSignIn = void 0;
const users_1 = require("../../Engine/Models/users");
const uuid_1 = require("uuid");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const authHelper_1 = require("../../Engine/Helpers/authHelper");
exports.postSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield users_1.Users.findOne({ where: { email } });
        if (!user)
            throw "Invalid credentials";
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            throw "Invalid credentials";
        const auth_token = yield authHelper_1.generateToken({
            id: user.guid,
            first_name: user.first_name,
        });
        return res.status(200).json({ error: false, auth_token });
    }
    catch (e) {
        return res.status(400).json({ error: true, msg: String(e) });
    }
});
exports.postSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { first_name, last_name, email, password } = req.body;
        const userData = {
            first_name,
            last_name,
            email,
            password: yield bcryptjs_1.default.hash(password, 10),
            guid: uuid_1.v4(),
        };
        const user = yield users_1.Users.create(userData);
        const user_data = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: password,
            guid: user.guid,
        };
        return res.status(200).json({ error: false, user_data });
    }
    catch (e) {
        return res.status(400).json({ error: true, msg: String(e) });
    }
});
