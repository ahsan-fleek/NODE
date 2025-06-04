"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importStar(require("./app"));
const http_1 = __importDefault(require("http"));
const database_1 = require("./database");
const logger_1 = require("./utils/helpers/logger");
const PORT = process.env.PORT || 3000;
const server = http_1.default.createServer(app_1.default);
async function initApplication() {
    try {
        await (0, database_1.connectToDatabase)();
        (0, app_1.registerRoutes)();
        server.listen(PORT, () => {
            logger_1.log.success(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        logger_1.log.error(`Application initialization failed: ${error}`);
    }
}
void (async () => {
    try {
        await initApplication();
    }
    catch (error) {
        logger_1.log.error(`Error during application startup: ${error}`);
    }
})();
//# sourceMappingURL=index.js.map