import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import demoRoutes from './routes/demoRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import authRoutes from './routes/authRoutes.js';
import hrRoutes from './routes/hrRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import financeRoutes from './routes/financeRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import supportRoutes from './routes/supportRoutes.js';
import marketingRoutes from './routes/marketingRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import { authenticate, authorize } from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/v1/hr', hrRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/finance', financeRoutes);
app.use('/api/v1/inventory', inventoryRoutes);
app.use('/api/v1/support', supportRoutes);
app.use('/api/v1/marketing', marketingRoutes);
app.use('/api/v1/analytics', analyticsRoutes);
app.use('/api', demoRoutes);
app.use('/api', newsletterRoutes);

// Basic route to satisfy backend requirement
app.get('/api/status', (req, res) => {
  res.json({
    status: 'Online',
    message: 'MERN Stack Backend is running flawlessly.',
    endpoints: [
      '/api/auth',
      '/api/v1/hr',
      '/api/v1/projects',
      '/api/v1/finance',
      '/api/v1/inventory',
      '/api/v1/support',
      '/api/v1/marketing',
      '/api/v1/analytics',
      '/api/status'
    ]
  });
});

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Mantle Server is running on port: ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
