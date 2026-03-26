import express from 'express';
import { getProjects, getProjectTasks, updateTaskStatus } from '../controllers/projectController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/', getProjects);
router.get('/:id/tasks', getProjectTasks);
router.patch('/tasks/:id', updateTaskStatus);

export default router;
