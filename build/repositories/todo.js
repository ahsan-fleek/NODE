"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const database_1 = require("../database");
const todo_1 = __importDefault(require("../models/todo"));
const custom_1 = require("../utils/errors/custom");
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
            if (!createdTodo) {
                throw new custom_1.CustomError(500, "Todo creation failed");
            }
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
    async deleteTodo(id) {
        try {
            const result = await this.getCollection().deleteOne({ _id: new mongodb_1.ObjectId(id) });
            console.log("Result of deleteTodo:", result);
            if (result.deletedCount === 0) {
                throw new custom_1.CustomError(404, "Todo not found for deletion");
            }
            return true;
        }
        catch (error) {
            console.error("Error deleting todo:", error);
            throw error;
        }
    }
    async updateTodo(id, data) {
        try {
            await this.getCollection().updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: data });
            const updatedTodo = await this.getCollection().findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!updatedTodo) {
                throw new custom_1.CustomError(404, "Todo not found for update");
            }
            return updatedTodo;
        }
        catch (error) {
            console.error("Error updating todo:", error);
            throw error;
        }
    }
}
exports.default = new TodoRepository();
//# sourceMappingURL=todo.js.map