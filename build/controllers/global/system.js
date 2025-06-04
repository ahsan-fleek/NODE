"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const utils_1 = require("../../utils");
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
routes.get('/health', async (req, res) => {
    utils_1.Utils.apiResponse({
        res,
        code: axios_1.HttpStatusCode.Ok,
        status: true,
        responseCode: '200',
        responseDescription: `Server is up & running for ${Math.floor(process.uptime())} seconds`,
    });
});
//# sourceMappingURL=system.js.map