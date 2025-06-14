import express, { Application, Request, Response, NextFunction } from 'express';
import cors from "cors"
import todoRoutes from './routes/todo';
import systemRoutes from './routes/system';
import { defaultRoutes } from './controllers/global/default';
import ErrorHandler from './utils/helpers/errorHandler';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const registerRoutes = () => {
  app.use('/api/system/', systemRoutes);
  app.use('/api/todo/', todoRoutes);
  app.use('/', defaultRoutes);
};

app.use(ErrorHandler);

export default app;
