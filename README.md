# Natarajan Travel Agency — Full-Stack Platform

A professional, modern digital car booking and travel agency web application built with the MERN stack (TypeScript, React, Node.js, Express, MongoDB) featuring responsive UI, micro-animations, curated fleet management, and an intelligent AI assistant.

---

## 🚀 Quick Start

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (v9+)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas URI)

### 2. Installation
Install root, server, and client dependencies:
```bash
npm run install:all
```

### 3. Environment Setup
Create environment files from the provided examples:

```bash
# Server Environment
cp server/.env.example server/.env

# Client Environment
cp client/.env.example client/.env
```

### 4. Running Locally
Start both backend API (`http://localhost:5000`) and frontend application (`http://localhost:5173`) concurrently:
```bash
npm run dev
```

---

## 📁 Repository Structure

```
NTA/
├── client/                     # Vite + React + TypeScript + Tailwind CSS
├── server/                     # Express.js + TypeScript REST API
├── docs/                       # System Architecture & Technical Specifications
│   ├── architecture.md         # System boundaries, data flow & architectural patterns
│   ├── database-schema.md      # Mongoose schemas & data dictionary
│   ├── api-specification.md    # REST API endpoints & response envelopes
│   ├── ui-design.md            # Color tokens, typography, component layout specs
│   ├── chatbot-architecture.md # AI Travel Assistant architecture & tool calling
│   └── deployment.md           # Production deployment & environment configurations
├── package.json                # Monorepo orchestration scripts
└── README.md                   # Project overview & documentation index
```

---

## 🛠️ Technology Stack

- **Frontend**: React 18/19, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React, React Router v6
- **Backend**: Node.js, Express.js, TypeScript, Mongoose, Helmet, Morgan, CORS, Dotenv
- **Database**: MongoDB
- **Architecture**: Clean Layered Architecture, RESTful API, Centralized Error Handling

---

## 📖 Documentation Index
- [Architecture Blueprint](docs/architecture.md)
- [Database Schema & Models](docs/database-schema.md)
- [REST API Specification](docs/api-specification.md)
- [UI Design System & Aesthetics](docs/ui-design.md)
- [AI Chatbot Engine](docs/chatbot-architecture.md)
- [Deployment Guidelines](docs/deployment.md)

---

## 📄 License
Private and Proprietary — Natarajan Travel Agency.
