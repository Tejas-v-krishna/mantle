import express from 'express';
import { getInventory, updateStock } from '../controllers/inventoryController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/', getInventory);
router.patch('/:id/stock', updateStock);

export default router;
