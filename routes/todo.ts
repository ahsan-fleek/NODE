import { Router } from 'express';
import TodoController from '../controllers/api/todo';
import { validateRequest } from '../utils/validators/global/validate-request';
import { createTodoValidator, updateTodoValidator } from '../utils/validators/api/todo';
import { asyncHandler } from '../utils/helpers/async-handling';
import { authenticate } from '../middlewares/authentication';

const router = Router();

router.get("/", asyncHandler(TodoController.getTodos));
router.post("/", authenticate, validateRequest(createTodoValidator), asyncHandler(TodoController.createTodo));
router.delete("/:id",authenticate,  asyncHandler(TodoController.deleteTodo));
router.put("/:id", authenticate, validateRequest(updateTodoValidator), asyncHandler(TodoController.updateTodo));


export default router;
