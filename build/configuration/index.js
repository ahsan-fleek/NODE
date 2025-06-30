"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_EXPIRES_IN = exports.JWT_SECRET = exports.CORS_ORIGIN = exports.MONOGODB_CONNECTION_STRING = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, MONOGODB_CONNECTION_STRING, CORS_ORIGIN, JWT_SECRET, JWT_EXPIRES_IN } = process.env;
exports.PORT = PORT;
exports.MONOGODB_CONNECTION_STRING = MONOGODB_CONNECTION_STRING;
exports.CORS_ORIGIN = CORS_ORIGIN;
exports.JWT_SECRET = JWT_SECRET;
exports.JWT_EXPIRES_IN = JWT_EXPIRES_IN;
if (!PORT || !MONOGODB_CONNECTION_STRING || !CORS_ORIGIN || !JWT_SECRET || !JWT_EXPIRES_IN) {
    throw new Error("Missing required environment variables");
}
//# sourceMappingURL=index.js.map