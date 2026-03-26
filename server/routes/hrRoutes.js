import express from 'express';
import { getEmployees, addEmployee } from '../controllers/hrController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// All HR routes are protected by authentication
router.use(authenticate);

router.get('/employees', getEmployees);
router.post('/employees', addEmployee);

export default router;
