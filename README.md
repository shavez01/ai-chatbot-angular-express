# 👨‍💻 Author

Shavez Mohammad
Senior Technical Consultant (Angular + Express + Redis + MongoDB)

# 🤖 AI Chatbot – Full Stack (Angular + Express + Redis + MongoDB)

A production-ready full-stack AI-powered chatbot built with Angular (Standalone) and Express.js, featuring MongoDB persistence, Redis caching, and Dockerized multi-container architecture.

This project demonstrates scalable backend design, clean architecture principles, API security practices, and containerized deployment.

## 🚀 Tech Stack

### 🖥 Frontend

- Angular (Standalone Components)
- SCSS styling
- HttpClient
- Clean feature-based structure

### ⚙ Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- Redis (Caching Layer)
- Express Validator
- Winston (Structured Logging)
- Express Rate Limit
- dotenv

### 🐳 DevOps

- Docker
- Docker Compose
- Multi-container architecture


## 🔥 Features Implemented

### Phase 1 – Core Chat

- Angular chat UI
- REST API with Express
- Mock AI response service
- MongoDB chat persistence
- Clean controller → service → model architecture

### Phase 2 – Caching + Containerization

- Redis caching (cache-aside strategy)
- Environment-based config
- Dockerized backend
- Docker Compose for:
    Express
    MongoDB
    Redis

### Phase 3 – Production Enhancements

- API Rate limiting
- Request validation
- Global error middleware
- Structured logging with Winston
- Clean scalable folder structure

## ⚙️ How To Run (Docker – Recommended)

### 1️⃣ Clone Repository
```bash
git clone https://github.com/shavez01/ai-chatbot-angular-express.git
cd ai-chatbot-angular-express
```

### 2️⃣ Start Backend Services
```bash
docker-compose up --build
```

Services running:
Backend → http://localhost:5000
MongoDB → 27017
Redis → 6379

### 3️⃣ Run Angular Frontend

- Inside frontend folder:

```bash
cd frontend
npm install
ng serve
```

### 🔐 API Endpoints
- Send Chat Message
    POST /api/chat

Body:

{
  "message": "Hello AI"
}

- Get Chat History
    GET /api/chat/history
    ⚡ Redis Caching Strategy

Checks Redis before processing message

If cached → return immediately
If not → generate response → store in MongoDB → cache for 60 seconds