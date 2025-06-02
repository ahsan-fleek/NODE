import { Collection, Db, WithId } from "mongodb";
import { ITodo } from "../utils/interfaces/api/todoInterface";
import { getDb } from "../database";
import TodoModel from "../models/todo";

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
      if (!createdTodo) throw new Error("Todo creation failed");
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
}

export default new TodoRepository();
