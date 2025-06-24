import { Router } from 'express';
import { asyncHandler } from '../utils/helpers/asyncHandler';
import { validateRequest } from '../utils/validators/global/validate-request';
import { registerValidator } from '../utils/validators/api/user';
import UserController from '../controllers/api/user';

const router = Router();

router.post("/signup", validateRequest(registerValidator), asyncHandler(UserController.signup));


export default router;
