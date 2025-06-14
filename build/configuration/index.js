"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONOGODB_CONNECTION_STRING = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, MONOGODB_CONNECTION_STRING } = process.env;
exports.PORT = PORT;
exports.MONOGODB_CONNECTION_STRING = MONOGODB_CONNECTION_STRING;
if (!PORT || !MONOGODB_CONNECTION_STRING) {
    throw new Error("❌ Missing required environment variables");
}
//# sourceMappingURL=index.js.map