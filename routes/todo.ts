import { Router } from 'express';
import TodoController from '../controllers/api/todo'; 
import { asyncHandler } from '../utils/helpers/asyncHandler';

const router = Router();

router.get("/", asyncHandler(TodoController.getTodos));
router.post("/", asyncHandler(TodoController.createTodo));

export default router;
