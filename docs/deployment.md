# Deployment & Operational Guidelines — Natarajan Travel Agency

This document outlines environment variable strategies, build instructions, and production deployment best practices.

---

## 1. Environment Configurations

### Server (`server/.env`)
```ini
# Server Port
PORT=5000

# Node Environment
NODE_ENV=development

# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/natarajan_travel_agency

# JWT Secret for Auth
JWT_SECRET=super_secret_jwt_key_change_in_production_32_chars_min

# Client URL for CORS
CLIENT_URL=http://localhost:5173

# AI Model Provider (Optional / Planned)
AI_API_KEY=
```

### Client (`client/.env`)
```ini
# Backend API Base URL
VITE_API_URL=http://localhost:5000/api
```

---

## 2. Build & Run Commands

### Development Mode (Concurrent)
```bash
npm run dev
```
Starts backend API on `http://localhost:5000` and frontend Vite dev server on `http://localhost:5173`.

### Production Build
```bash
# Build both frontend and backend
npm run build

# Start production server
npm run start
```

---

## 3. Recommended Production Architecture
- **Frontend**: Deployed to Vercel, Netlify, or AWS S3 + CloudFront CDN.
- **Backend API**: Deployed to Render, Railway, AWS ECS, or DigitalOcean App Platform.
- **Database**: MongoDB Atlas Cluster with automated backups and network IP whitelisting.
