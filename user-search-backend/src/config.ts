import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../.env') });

interface Config {
  PORT: string;
  MONGODB_URI: string;
}

const config: Config = {
  PORT: process.env.PORT ?? '5000',
  MONGODB_URI: process.env.MONGODB_URI??"",
};

export { config };