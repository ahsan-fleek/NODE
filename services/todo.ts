import TodoModel from "../models/todo";
import { ITodo } from "../utils/interfaces/api/todoInterface";
import TodoRepository from "../repositories/todo"

class TodoService {
    public async createTodo(data: Partial<ITodo>): Promise<ITodo> {
        const todo = TodoModel.create(data);
        return await TodoRepository.addTodo(todo);
    }

    public async getTodos(): Promise<ITodo[]> {
        return await TodoRepository.getTodos();
    }
}

export default new TodoService();
