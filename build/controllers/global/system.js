"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const utils_1 = require("../../utils");
const SystemController = {
    health: (req, res) => {
        utils_1.Utils.apiResponse({
            res,
            code: axios_1.HttpStatusCode.Ok,
            status: true,
            responseCode: '200',
            responseDescription: `Server is up & running for ${Math.floor(process.uptime())} seconds`,
        });
    },
};
exports.default = SystemController;
//# sourceMappingURL=system.js.map