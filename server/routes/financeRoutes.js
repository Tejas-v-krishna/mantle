import express from 'express';
import { getFinancialSummary, addTransaction } from '../controllers/financeController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/summary', getFinancialSummary);
router.post('/transactions', addTransaction);

export default router;
