"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const axios_1 = require("axios");
const express_1 = __importDefault(require("express"));
const utils_1 = require("../../utils");
const routes = express_1.default.Router();
routes.all('*', (req, res) => {
    utils_1.Utils.apiResponse({
        res,
        code: axios_1.HttpStatusCode.NotFound,
        status: true,
        responseCode: '404',
        responseDescription: `The requested resource '${req.originalUrl}' could not be found on this server`,
    });
});
exports.router = routes;
//# sourceMappingURL=default.js.map