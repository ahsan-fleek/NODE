"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("../repositories/todo"));
class TodoService {
    async createTodo(data, user) {
        const todo = {
            title: data.title,
            description: data.description,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: {
                id: user.id,
                fullname: user.fullname,
            },
        };
        return await todo_1.default.addTodo(todo);
    }
    async getTodos() {
        return await todo_1.default.getTodos();
    }
    async deleteTodo(id) {
        return await todo_1.default.deleteTodo(id);
    }
    async updateTodo(id, data) {
        return await todo_1.default.updateTodo(id, data);
    }
}
exports.default = new TodoService();
//# sourceMappingURL=todo.js.map