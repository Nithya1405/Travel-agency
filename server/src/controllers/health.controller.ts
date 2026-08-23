import { Request, Response } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { IHealthStatus } from '../types';
import { config } from '../config/env';

export const getHealth = (req: Request, res: Response): void => {
  const healthData: IHealthStatus = {
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    environment: config.nodeEnv,
    version: '1.0.0',
  };

  ApiResponse.success<IHealthStatus>(res, 'Natarajan Travel Agency API is operating normally', healthData);
};
