"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_interface_1 = require("../utils/interfaces/api/todo-interface");
const base_model_1 = __importDefault(require("./base-model"));
class TodoModel extends base_model_1.default {
    static getFillable() {
        return todo_interface_1.TodoFillable;
    }
    static create(data) {
        const fillables = this.getFillable();
        return this.fill(data, fillables);
    }
}
exports.default = TodoModel;
//# sourceMappingURL=todo.js.map