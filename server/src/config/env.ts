import dotenv from 'dotenv';
import path from 'path';

// Load .env file from server root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const config = {
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/natarajan_travel_agency',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret_please_change_in_production',
  aiApiKey: process.env.AI_API_KEY || '',
};
