import { Request, Response } from "express";
import TodoService from "../services/todo";

const TodoController = {
  createTodo: async (req: Request, res: Response) => {
    try {
      const todo = await TodoService.createTodo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to create todo" });
    }
  },

  getTodos: async (req: Request, res: Response) => {
    try {
      const todos = await TodoService.getTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: "Failed to list todos" });
    }
  },


};

export default TodoController;
