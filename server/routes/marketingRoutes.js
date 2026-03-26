import express from 'express';
import { getMarketingSummary, syncLeads } from '../controllers/marketingController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/summary', getMarketingSummary);
router.post('/leads/sync', syncLeads);

export default router;
