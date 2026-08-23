import mongoose from 'mongoose';
import { config } from './env';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB] Connection Error: ${(error as Error).message}`);
    // Do not exit process in dev if DB is not running yet
    if (config.nodeEnv === 'production') {
      process.exit(1);
    }
  }
};
