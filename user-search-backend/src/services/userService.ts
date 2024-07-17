import User, { IUser } from '../models/user';

export const userService = {
  searchUsers: async (email: string, number?: string): Promise<IUser[]> => {
    const query: any = { email };
    if (number) {
      query.number = number;
    }

    try {
        const users = await User.find(query).exec();

        if (users.length === 0) {
          throw new Error('No user found with the specified email and number');
        }
  
        return users;
    } catch (error) {
      throw new Error(`Error searching users ${(error as Error).message}`);
    }
  }
};