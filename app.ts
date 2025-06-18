import express, { Application } from 'express';
import cors from "cors"
import todoRoutes from './routes/todo';
import systemRoutes from './routes/system';
import { defaultRoutes } from './controllers/global/default';
import ErrorHandler from './utils/helpers/errorHandler';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser())

export const registerRoutes = () => {
  app.use('/api/system/', systemRoutes);
  app.use('/api/todo/', todoRoutes);
  app.use('/', defaultRoutes);
  app.use(ErrorHandler);
};

export default app;
