import express from 'express';
import { config } from './config/config';
import authRoutes from './routes/auth.routes';
import connectDB from './config/database';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Connect DB and start server
connectDB().then(() => {
  app.listen(config.port, () => {
    console.log(`🚀 Server running at http://localhost:${config.port}`);
  });
});
