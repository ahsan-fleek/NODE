import {  ObjectId, WithId } from "mongodb";
import { ITodo } from "../utils/interfaces/api/todo-interface";
import { CustomError } from "../utils/errors/custom";
import { BaseRepository } from "./base-repository";

class TodoRepository extends BaseRepository<ITodo> {
  constructor() {
    super('todos');
  }
  async getTodos() {
    return await this.findMany();
  }

  async addTodo(data: ITodo): Promise<WithId<ITodo>> {
    const result = await this.insertOne(data);
    const createdTodo = await this.findById(result.insertedId.toString());
    if (!createdTodo) throw new Error('Todo creation failed');
    return createdTodo;
  }

  async deleteTodo(id: string): Promise<boolean> {
    const result = await this.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0)  throw new Error('Todo not found for deletion');
    return true;
  }

  async updateTodo(id: string, data: Partial<ITodo>): Promise<WithId<ITodo> | null> {
      await this.updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...data, updatedAt: new Date() } }
      );
      const updatedTodo =  await this.findById(id);
      if (!updatedTodo)  throw new CustomError(404, "Todo not found for update");
      return updatedTodo;
  }

}

export default new TodoRepository();
