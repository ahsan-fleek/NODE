import { ITodo } from "../utils/interfaces/api/todo-interface";
import TodoRepository from "../repositories/todo"

class TodoService {
    public async createTodo(data: Partial<ITodo>): Promise<ITodo> {
        return await TodoRepository.addTodo(data);
    }

    public async getTodos(): Promise<ITodo[]> {
        return await TodoRepository.getTodos();
    }

    public async deleteTodo(id: string): Promise<boolean> {
        return await TodoRepository.deleteTodo(id);
    }

    public async updateTodo(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
        return await TodoRepository.updateTodo(id, data);
    }
    
}

export default new TodoService();
