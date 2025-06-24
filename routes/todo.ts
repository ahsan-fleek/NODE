import { Router } from 'express';
import TodoController from '../controllers/api/todo';
import { asyncHandler } from '../utils/helpers/asyncHandler';
import { validateRequest } from '../utils/validators/global/validate-request';
import { createTodoValidator, updateTodoValidator } from '../utils/validators/api/todo';

const router = Router();

router.get("/", asyncHandler(TodoController.getTodos));
router.post("/", validateRequest(createTodoValidator), asyncHandler(TodoController.createTodo));
router.delete("/:id", asyncHandler(TodoController.deleteTodo));
router.put("/:id", validateRequest(updateTodoValidator), asyncHandler(TodoController.updateTodo));


export default router;
