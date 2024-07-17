
import User, { IUser } from '../models/user';

export const userRepository = {
  findUsers: async (email: string, number?: string): Promise<IUser[]> => {
    const query: any = { email: { $regex: email, $options: 'i' } };
    if (number) {
      query.number = number.replace(/-/g, '');
    }
    try {
      const users = await User.find(query).exec();
      return users;
    } catch (error) {
      throw new Error('Error finding users');
    }
  }
};