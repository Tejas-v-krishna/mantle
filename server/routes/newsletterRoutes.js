import express from 'express';
import { subscribeToNewsletter, getSubscribers } from '../controllers/newsletterController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

// Subscribe to newsletter (public)
router.post('/subscribe', subscribeToNewsletter);

// Get all subscribers (protected - admin only)
router.get('/subscribers', authenticate, authorize('admin', 'manager'), getSubscribers);

export default router;