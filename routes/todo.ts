import { Router } from 'express';
import TodoController from '../controllers/api/todo';
import { asyncHandler } from '../utils/helpers/asyncHandler';
import { validateRequest } from '../utils/validators/global/validate-request';
import { createTodoSchema, updateTodoSchema } from '../utils/validators/api/todo';

const router = Router();

router.get("/", asyncHandler(TodoController.getTodos));
router.post("/", validateRequest(createTodoSchema), asyncHandler(TodoController.createTodo));
router.delete("/:id", asyncHandler(TodoController.deleteTodo));
router.put("/:id", validateRequest(updateTodoSchema), asyncHandler(TodoController.updateTodo));


export default router;
