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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = void 0;
const users_1 = require("../../Engine/Models/users");
exports.getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.Users.findAll({
            attributes: ["first_name", "last_name", "email", ["guid", "id"]],
        });
        return res
            .status(200)
            .json({
            error: false,
            data: { current_users: req.user, all_user: users },
        });
    }
    catch (e) {
        return res.status(400).json({ error: true, msg: String(e) });
    }
});
