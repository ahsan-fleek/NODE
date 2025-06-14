import { Collection, Db, ObjectId, WithId } from "mongodb";
import { ITodo } from "../utils/interfaces/api/todo-interface";
import { getDb } from "../database";
import TodoModel from "../models/todo";
import { CustomError } from "../utils/errors/custom";

class TodoRepository {
  private collection: Collection<ITodo> | null = null;
  
  private getCollection(): Collection<ITodo> {
    if (!this.collection) {
      const db: Db = getDb(); 
      this.collection = db.collection<ITodo>("todos");
    }
    return this.collection;
  }

  async addTodo(data: Partial<ITodo>): Promise<WithId<ITodo>> {
    try {
      const todo: ITodo = TodoModel.create(data);
      const result = await this.getCollection().insertOne(todo);
      const createdTodo = await this.getCollection().findOne({ _id: result.insertedId });
      if (!createdTodo)  {
        throw new CustomError(500, "Todo creation failed");
      }
      return createdTodo;
    } catch (error) {
      console.error("Error adding todo:", error);
      throw error;
    }
  }

  async getTodos(): Promise<WithId<ITodo>[]> {
    try {
      return await this.getCollection().find({}).toArray();
    } catch (error) {
      console.error("Error getting todos:", error);
      throw error;
    }
  }

  async deleteTodo(id: string): Promise<boolean> {
    try {
      const result = await this.getCollection().deleteOne({ _id: new ObjectId(id) });
      console.log("Result of deleteTodo:", result);
      if (result.deletedCount === 0) {
        throw new CustomError(404, "Todo not found for deletion");
      }
      return true;
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  }

  async updateTodo(id: string, data: Partial<ITodo>): Promise<WithId<ITodo> | null> {
    try {
      await this.getCollection().updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
      );
      const updatedTodo = await this.getCollection().findOne({ _id: new ObjectId(id) });
      if (!updatedTodo) {
        throw new CustomError(404, "Todo not found for update");
      }
      return updatedTodo;
    } catch (error) {
      console.error("Error updating todo:", error);
      throw error;
    }
  }

}

export default new TodoRepository();
