"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("../models/todo"));
const todo_2 = __importDefault(require("../repositories/todo"));
class TodoService {
    async createTodo(data) {
        const todo = todo_1.default.create(data);
        return await todo_2.default.addTodo(todo);
    }
    async getTodos() {
        return await todo_2.default.getTodos();
    }
}
exports.default = new TodoService();
//# sourceMappingURL=todo.js.map