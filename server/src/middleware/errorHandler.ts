import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';
import { ApiResponse } from '../utils/apiResponse';
import { config } from '../config/env';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let errors: any[] | undefined = undefined;

  // Custom AppError
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errors = err.errors;
  }
  // Mongoose Validation Error
  else if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation failed';
    errors = Object.values(err.errors || {}).map((e: any) => ({
      field: e.path,
      message: e.message,
    }));
  }
  // Mongoose Invalid ObjectId Cast Error
  else if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid identifier format for field: ${err.path}`;
  }
  // MongoDB Duplicate Key Error
  else if (err.code === 11000) {
    statusCode = 409;
    const duplicateField = Object.keys(err.keyValue || {})[0] || 'field';
    message = `Duplicate value entered for ${duplicateField}. Must be unique.`;
  }
  // Standard Error
  else if (err instanceof Error) {
    message = err.message || 'Internal Server Error';
  }

  if (config.nodeEnv === 'development') {
    console.error(`[Error ${statusCode}] ${req.method} ${req.originalUrl} ->`, err.message || err);
  }

  ApiResponse.error(res, message, statusCode, errors);
};
