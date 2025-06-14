"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const todo_1 = __importDefault(require("../../services/todo"));
const utils_1 = require("../../utils");
const TodoController = {
    createTodo: async (req, res) => {
        const todo = await todo_1.default.createTodo(req.body);
        utils_1.Utils.apiResponse({
            res,
            code: axios_1.HttpStatusCode.Ok,
            status: true,
            responseCode: '200',
            responseDescription: 'You have successfully created todo',
            data: todo
        });
    },
    getTodos: async (req, res) => {
        const todos = await todo_1.default.getTodos();
        utils_1.Utils.apiResponse({
            res,
            code: axios_1.HttpStatusCode.Ok,
            status: true,
            responseCode: '200',
            responseDescription: 'You have successfully fetched todos',
            data: todos
        });
    },
    deleteTodo: async (req, res) => {
        const id = req.params.id;
        await todo_1.default.deleteTodo(id);
        utils_1.Utils.apiResponse({
            res,
            code: axios_1.HttpStatusCode.Ok,
            status: true,
            responseCode: '200',
            responseDescription: 'Todo successfully deleted',
        });
    },
    updateTodo: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const updatedTodo = await todo_1.default.updateTodo(id, data);
        utils_1.Utils.apiResponse({
            res,
            code: axios_1.HttpStatusCode.Ok,
            status: true,
            responseCode: '200',
            responseDescription: 'Todo successfully updated',
            data: updatedTodo,
        });
    },
};
exports.default = TodoController;
//# sourceMappingURL=todo.js.map