import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/env';
import { connectDB } from './config/db';
import { requestLogger } from './middleware/requestLogger';
import { notFoundHandler } from './middleware/notFoundHandler';
import { errorHandler } from './middleware/errorHandler';
import apiRouter from './routes';

const app: Application = express();

// Security HTTP headers
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
  })
);

// Request body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP Request logging
app.use(requestLogger);

// Mount API Routes
app.use('/api', apiRouter);

// Handle 404 routes
app.use(notFoundHandler);

// Centralized error handling
app.use(errorHandler);

// Start server
const startServer = async () => {
  // Connect to MongoDB
  await connectDB();

  app.listen(config.port, () => {
    console.log(
      `[Server] Natarajan Travel Agency API is running on http://localhost:${config.port} (${config.nodeEnv})`
    );
  });
};

startServer();

export default app;
