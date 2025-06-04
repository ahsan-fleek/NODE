"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const todo_1 = __importDefault(require("../models/todo"));
class TodoRepository {
    constructor() {
        this.collection = null;
    }
    getCollection() {
        if (!this.collection) {
            const db = (0, database_1.getDb)();
            this.collection = db.collection("todos");
        }
        return this.collection;
    }
    async addTodo(data) {
        try {
            const todo = todo_1.default.create(data);
            const result = await this.getCollection().insertOne(todo);
            const createdTodo = await this.getCollection().findOne({ _id: result.insertedId });
            if (!createdTodo)
                throw new Error("Todo creation failed");
            return createdTodo;
        }
        catch (error) {
            console.error("Error adding todo:", error);
            throw error;
        }
    }
    async getTodos() {
        try {
            return await this.getCollection().find({}).toArray();
        }
        catch (error) {
            console.error("Error getting todos:", error);
            throw error;
        }
    }
}
exports.default = new TodoRepository();
//# sourceMappingURL=todo.js.map