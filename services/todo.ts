import TodoModel from "../models/todo";
import { ITodo } from "../utils/interfaces/api/todoInterface";
import TodoRepository from "../repositories/todo"

class TodoService {
    public async createTodo(data: Partial<ITodo>): Promise<ITodo> {
        const todo = TodoModel.create(data);
        return await TodoRepository.addTodo(todo);
    }

    public async getTodoById(id: string): Promise<ITodo | null> {
        return await TodoRepository.getTodoById(id);
    }

    public async updateTodo(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
        return await TodoRepository.updateTodo(id, data);
    }

    public async deleteTodo(id: string): Promise<void> {
        await TodoRepository.deleteTodo(id);
    }

    public async listTodos(): Promise<ITodo[]> {
        return await TodoRepository.listTodos();
    }
}

export default new TodoService();
