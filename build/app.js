"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const cors_1 = __importDefault(require("cors"));
const constant_1 = require("./Engine/Config/constant");
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const swaggerInfo = {
    info: {
        version: "1.0.0",
        title: "Generic-typescript Server",
        description: "Generic typescript server backend APIs",
        license: "MIT",
        url: "https://opensource.org/licenses/MIT",
    },
    host: `${constant_1.config.HOST}:${constant_1.config.PORT}`,
    basepath: "/",
};
let options = {
    swaggerDefinition: swaggerInfo,
    apis: [
        `src/app.${constant_1.config.ENV}`,
        `src/Public/Routes/*.${constant_1.config.ENV}`,
        `src/RoleUser/Routes/*.${constant_1.config.ENV}`,
    ],
    basepath: "/",
};
const swaggerSpec = swagger_jsdoc_1.default(options);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.get("/", (req, res) => {
    return res.status(200).json({ error: false, msg: "Hello to Shubham world" });
});
const Public_1 = __importDefault(require("./Public"));
const RoleUser_1 = __importDefault(require("./RoleUser"));
const router = express_1.Router();
router.use("/public", Public_1.default);
router.use("/user", RoleUser_1.default);
app.use("/api", router);
const server = app.listen(constant_1.config.PORT, () => {
    console.log(` app listening on port ${constant_1.config.PORT}`);
});
