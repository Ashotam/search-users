import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { config } from './config';
import User from './models/user';

dotenv.config();

// MongoDB connection setup
const uri = config.MONGODB_URI || "";
if (!uri) {
  console.error('MongoDB URI is not defined in the environment variables.');
  process.exit(1);
}

async function seedUsers() {
  try {
    await mongoose.connect(uri);

    const initialUsers = [
      { email: 'jim@gmail.com', number: '221122' },
      { email: 'jam@gmail.com', number: '830347' },
      { email: 'john@gmail.com', number: '221122' },
      { email: 'jams@gmail.com', number: '349425' },
      { email: 'jams@gmail.com', number: '141424' },
      { email: 'jill@gmail.com', number: '822287' },
      { email: 'jill@gmail.com', number: '822286' },
    ];

    await User.deleteMany({});
    await User.insertMany(initialUsers);

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedUsers();