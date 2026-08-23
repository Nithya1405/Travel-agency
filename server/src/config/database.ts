import mongoose from 'mongoose';
import { config } from './env';

/**
 * Resilient MongoDB Connection Manager
 */
export const connectDatabase = async (): Promise<void> => {
  if (!config.mongoUri) {
    console.error('[MongoDB Error] MONGODB_URI environment variable is not defined.');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[MongoDB] Connected successfully to: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error(`[MongoDB] Connection Failed: ${(error as Error).message}`);
    if (config.nodeEnv === 'production') {
      process.exit(1);
    }
  }
};
