import { Router } from 'express';
import { asyncHandler } from '../utils/helpers/async-handling';
import { validateRequest } from '../utils/validators/global/validate-request';
import { loginValidator, registerValidator } from '../utils/validators/api/user';
import UserController from '../controllers/api/user';

const router = Router();

router.post("/signup", validateRequest(registerValidator), asyncHandler(UserController.signup));
router.post("/signin", validateRequest(loginValidator), asyncHandler(UserController.signin));


export default router;
