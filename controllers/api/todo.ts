import { Request, Response } from "express";
import { HttpStatusCode } from 'axios';
import TodoService from "../../services/todo";
import { Utils } from "../../utils";

const TodoController = {
  createTodo: async (req: Request, res: Response) => {
    const todo = await TodoService.createTodo(req.body);
    Utils.apiResponse({
      res,
      code: HttpStatusCode.Ok,
      status: true,
      responseCode: '200',
      responseDescription: 'You have successfully created todo',
      data: todo
    });
  },

  getTodos: async (req: Request, res: Response) => {
    const todos = await TodoService.getTodos();
    Utils.apiResponse({
      res,
      code: HttpStatusCode.Ok,
      status: true,
      responseCode: '200',
      responseDescription: 'You have successfully fetched todos',
      data: todos
    });
  },
};

export default TodoController;
