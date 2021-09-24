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
exports.isRoleUser = void 0;
const authHelper_1 = require("../Helpers/authHelper");
exports.isRoleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authData = yield authHelper_1.getToken(req, res, next);
        req.user = authData;
        next();
    }
    catch (e) {
        return res
            .status(400)
            .json({ error: true, msg: "Please login again to continue" });
    }
});
