import morgan from 'morgan';
import { config } from '../config/env';

export const requestLogger = config.nodeEnv === 'development'
  ? morgan('dev')
  : morgan('combined');
