"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.log = {
    success: (msg) => console.log(chalk_1.default.white.bgGreen.bold(String(msg))),
    error: (msg) => console.log(chalk_1.default.white.bgRed.bold(String(msg))),
    info: (msg) => console.log(chalk_1.default.cyan(String(msg))),
    warn: (msg) => console.log(chalk_1.default.yellow(String(msg))),
    line: () => { var _a; return console.log(chalk_1.default.gray("─".repeat(Math.max((_a = process.stdout.columns) !== null && _a !== void 0 ? _a : 40, 40)))); },
    blank: (lines = 1) => console.log("\n".repeat(lines)),
    title: (msg) => console.log(chalk_1.default.white.bgCyan.bold(msg)),
};
//# sourceMappingURL=index.js.map