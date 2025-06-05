import { Router } from 'express';
import SystemController from '../controllers/global/system'; // adjust path if needed

const router = Router();
// Health check route
router.get('/health', SystemController.health);

export default router;
