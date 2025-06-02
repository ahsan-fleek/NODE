import { Request, Response } from "express";
import TodoService from "../services/todo"

class TodoController {
    public async createTodo(req: Request, res: Response) {
        try {
            const todo = await TodoService.createTodo(req.body);
            res.status(201).json(todo);
        } catch (error) {
            res.status(500).json({ error: "Failed to create todo" });
        }
    }

    public async getTodoById(req: Request, res: Response) {
        try {
            const todo = await TodoService.getTodoById(req.params.id);
            if (!todo) return res.status(404).json({ error: "Todo not found" });
            res.json(todo);
        } catch (error) {
            res.status(500).json({ error: "Failed to get todo" });
        }
    }

    public async updateTodo(req: Request, res: Response) {
        try {
            const todo = await TodoService.updateTodo(req.params.id, req.body);
            if (!todo) return res.status(404).json({ error: "Todo not found" });
            res.json(todo);
        } catch (error) {
            res.status(500).json({ error: "Failed to update todo" });
        }
    }

    public async deleteTodo(req: Request, res: Response) {
        try {
            await TodoService.deleteTodo(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: "Failed to delete todo" });
        }
    }

    public async getTodos(req: Request, res: Response) {
        try {
            const todos = await TodoService.listTodos();
            res.json(todos);
        } catch (error) {
            res.status(500).json({ error: "Failed to list todos" });
        }
    }
}

export default new TodoController();
