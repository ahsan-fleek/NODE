"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const custom_1 = require("../utils/errors/custom");
const base_repository_1 = require("./base-repository");
class TodoRepository extends base_repository_1.BaseRepository {
    constructor() {
        super('todos');
    }
    async getTodos() {
        return await this.findMany();
    }
    async addTodo(data) {
        const result = await this.insertOne(data);
        const createdTodo = await this.findById(result.insertedId.toString());
        if (!createdTodo)
            throw new Error('Todo creation failed');
        return createdTodo;
    }
    async deleteTodo(id) {
        const result = await this.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        if (result.deletedCount === 0)
            throw new Error('Todo not found for deletion');
        return true;
    }
    async updateTodo(id, data) {
        await this.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { ...data, updatedAt: new Date() } });
        const updatedTodo = await this.findById(id);
        if (!updatedTodo)
            throw new custom_1.CustomError(404, "Todo not found for update");
        return updatedTodo;
    }
}
exports.default = new TodoRepository();
//# sourceMappingURL=todo.js.map