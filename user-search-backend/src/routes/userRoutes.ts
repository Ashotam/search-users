import express from 'express';
import { userController } from '../controllers/userController';

export const indexRouter = express.Router();

indexRouter.post('/search', userController.search);