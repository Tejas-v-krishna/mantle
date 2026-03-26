import express from 'express';
import { submitDemoRequest, getDemoRequests } from '../controllers/demoController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

// Submit a demo request (public)
router.post('/demo-request', submitDemoRequest);

// Get all demo requests (protected - admin only)
router.get('/demo-requests', authenticate, authorize('admin', 'manager'), getDemoRequests);

export default router;