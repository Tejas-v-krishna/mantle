import express from 'express';
import { getUnifiedAnalytics } from '../controllers/analyticsController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/unified', getUnifiedAnalytics);

export default router;
