import express from 'express';
import { getTickets, createTicket } from '../controllers/supportController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/tickets', getTickets);
router.post('/tickets', createTicket);

export default router;
