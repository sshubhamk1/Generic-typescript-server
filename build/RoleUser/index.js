"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EntrustRoleMiddleware_1 = require("../Engine/Middleware/EntrustRoleMiddleware");
const adminLevelRoutes_1 = __importDefault(require("./Routes/adminLevelRoutes"));
const router = express_1.Router();
router.use(EntrustRoleMiddleware_1.isRoleUser);
router.use("/admin", adminLevelRoutes_1.default);
exports.default = router;
