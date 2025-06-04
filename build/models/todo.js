"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoInterface_1 = require("../utils/interfaces/api/todoInterface");
const baseModel_1 = __importDefault(require("./baseModel"));
class TodoModel extends baseModel_1.default {
    static getFillable() {
        return todoInterface_1.TodoFillable;
    }
    static create(data) {
        const fillables = this.getFillable();
        return this.fill(data, fillables);
    }
}
exports.default = TodoModel;
//# sourceMappingURL=todo.js.map