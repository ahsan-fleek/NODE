"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("../repositories/todo"));
class TodoService {
    async createTodo(data) {
        return await todo_1.default.addTodo(data);
    }
    async getTodos() {
        return await todo_1.default.getTodos();
    }
}
exports.default = new TodoService();
//# sourceMappingURL=todo.js.map