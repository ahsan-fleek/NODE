import express, { Application, Request, Response, NextFunction } from 'express';
import cors from "cors"

import router from './routes/todo';

const app: Application = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Global error handler:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: err,
  });
});


export const setupRoutes = () => {
  app.use('/api', router);
};

export default app;
