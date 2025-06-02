import { Router } from 'express';
import TodoController from '../controllers/todo'; 

const router = Router();

router.get('/get-all', TodoController.getTodos);
router.post('/create-todo', TodoController.createTodo);

export default router;
