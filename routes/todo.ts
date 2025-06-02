import express from 'express';
const routes = express.Router();

import TodoRoutes from '../controllers/todo';

import { wrapRoutesWithAsyncHandler } from '../utils/helpers/asyncHandler';

// API versioning prefix '/v1' for example
routes.use('/v1/todos', wrapRoutesWithAsyncHandler(TodoRoutes));

export const router = routes;
