import { Router } from 'express';
import TodoController from '../controllers/api/todo';
import { asyncHandler } from '../utils/helpers/asyncHandler';
import { validateRequest } from '../utils/validators/global/validateRequest';
import { createTodoSchema } from '../utils/validators/api/todo';

const router = Router();

router.get("/", asyncHandler(TodoController.getTodos));
router.post("/", validateRequest(createTodoSchema), asyncHandler(TodoController.createTodo));

export default router;
