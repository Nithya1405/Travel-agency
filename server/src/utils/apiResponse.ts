import { Response } from 'express';
import { IApiResponse } from '../types';

export class ApiResponse {
  static success<T>(res: Response, message: string, data?: T, statusCode = 200): Response {
    const payload: IApiResponse<T> = {
      success: true,
      message,
      data,
    };
    return res.status(statusCode).json(payload);
  }

  static error(res: Response, message: string, statusCode = 500, errors?: any[]): Response {
    const payload: IApiResponse = {
      success: false,
      message,
      errors,
    };
    return res.status(statusCode).json(payload);
  }
}
