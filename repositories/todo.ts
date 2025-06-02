import { Collection, ObjectId, WithId } from "mongodb";
import { ITodo, TodoFillable } from "../utils/interfaces/api/todoInterface";
import { getDb } from "../database"; // assume you have a helper to get the db connection

class TodoRepository {
  private collection: Collection<ITodo>;

  constructor() {
    const db = getDb(); // your mongo db instance
    this.collection = db.collection<ITodo>("todos");
  }

  private getColumnsProjection() {
    // Build a projection object like { title: 1, description: 1, ... }
    const columns = TodoFillable.map(f => f.column);
    return columns.reduce((proj, col) => {
      proj[col] = 1;
      return proj;
    }, {} as Record<string, 1>);
  }

  async addTodo(data: Partial<ITodo>): Promise<WithId<ITodo>> {
    const result = await this.collection.insertOne(data as ITodo);
    return this.collection.findOne({ _id: result.insertedId }) as Promise<WithId<ITodo>>;
  }

  async getTodoById(id: string): Promise<WithId<ITodo> | null> {
    const projection = this.getColumnsProjection();
    return this.collection.findOne({ _id: new ObjectId(id) }, { projection });
  }

  async updateTodo(id: string, data: Partial<ITodo>): Promise<boolean> {
    const columns = TodoFillable.map(f => f.column);
    // filter data keys to only allowed columns
    const filteredData: Partial<ITodo> = {};
    columns.forEach(col => {
      if (data[col as keyof ITodo] !== undefined) {
        filteredData[col as keyof ITodo] = data[col as keyof ITodo];
      }
    });

    const result = await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: filteredData }
    );
    return result.modifiedCount > 0;
  }

  async deleteTodo(id: string): Promise<boolean> {
    // Soft delete example: set deletedAt timestamp
    const result = await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { deletedAt: new Date() } }
    );
    return result.modifiedCount > 0;
  }

  async listTodos(): Promise<WithId<ITodo>[]> {
    const projection = this.getColumnsProjection();
    return this.collection.find({ deletedAt: { $exists: false } }, { projection }).sort({ _id: 1 }).toArray();
  }
}

export default new TodoRepository();
