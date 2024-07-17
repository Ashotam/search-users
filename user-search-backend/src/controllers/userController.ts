import { Request, Response } from 'express';
import { userService } from '../services/userService';

export const userController = {
  search: async (req: Request, res: Response) => {
    try {
      const { email, number } = req.body;
      const users = await userService.searchUsers(email, number);
      setTimeout(() => {
        res.json(users);
      }, 5000);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
};