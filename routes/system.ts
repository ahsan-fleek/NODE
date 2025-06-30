import { Router } from 'express';
import SystemController from '../controllers/global/system'; 

const router = Router();
router.get('/health', SystemController.health);

export default router;
