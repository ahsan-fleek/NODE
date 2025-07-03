import { Request, Response } from "express";
import { HttpStatusCode } from 'axios';
import TodoService from "../../services/todo";
import { Utils } from "../../utils";

interface AuthenticatedRequest extends Request {
  user: any;
}

const TodoController = {
  
  createTodo: async (req: AuthenticatedRequest, res: Response) => {
    const { id, fullname } = req.user;
    const todo = await TodoService.createTodo(req.body, { id, fullname });
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

  deleteTodo: async (req: Request, res: Response) => {
    const id = req.params.id;
    await TodoService.deleteTodo(id);
    Utils.apiResponse({
      res,
      code: HttpStatusCode.Ok,
      status: true,
      responseCode: '200',
      responseDescription: 'Todo successfully deleted',
    });
  },

  updateTodo: async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const updatedTodo = await TodoService.updateTodo(id, data);
    
    Utils.apiResponse({
      res,
      code: HttpStatusCode.Ok,
      status: true,
      responseCode: '200',
      responseDescription: 'Todo successfully updated',
      data: updatedTodo,
    });
  },

};

export default TodoController;
