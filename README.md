# CortexAI 🤖

CortexAI is an AI-powered conversational platform that brings multiple AI capabilities into a single application.

It supports general AI conversations, web search, coding assistance, PDF question answering using RAG, image analysis, PDF generation, PowerPoint generation, authentication, conversation history, credit-based usage, and Razorpay payments.

The application is built using a microservices-oriented backend architecture with a React frontend, Express API Gateway, independent backend services, Redis, MongoDB, LangGraph, multiple AI providers, Qdrant, AWS S3, and Docker.

---

## ✨ Features

- 💬 AI-powered conversational chat
- 🔎 AI-powered web search
- 💻 Coding assistance
- 📄 Chat with PDF documents using RAG
- 🖼️ Image analysis
- 🎨 AI image generation
- 📑 PDF generation
- 📊 PowerPoint presentation generation
- 🔐 Firebase authentication
- 👤 User profiles and sessions
- 💾 Conversation history
- 🧠 Redis-based conversation memory
- 🪙 Credit-based AI usage
- 💳 Razorpay payment integration
- ☁️ AWS S3 file storage
- 🤖 Multiple AI model providers
- 🧩 LangGraph-based AI agent routing
- 🐳 Docker support
- 🚀 GitHub Actions CI/CD
- ☁️ AWS deployment support

---

# 🏗️ Architecture

CortexAI follows a microservices-oriented architecture.

```text
                         ┌─────────────────────┐
                         │   React Frontend    │
                         │       Vite          │
                         │     Port 5173       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     API Gateway     │
                         │     Port 8000        │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
       │    Auth     │       │    Chat     │       │    Agent    │
       │   :8001     │       │   :8002     │       │   :8003     │
       └─────────────┘       └─────────────┘       └──────┬──────┘
                                                          │
                                                          ▼
                                                   ┌─────────────┐
                                                   │   Billing   │
                                                   │   :8004     │
                                                   └─────────────┘


                    Shared Infrastructure
                    ├── MongoDB
                    ├── Redis
                    ├── Qdrant
                    └── AWS S3

🧩 Services

| Component | Port | Responsibility |
|---|---:|---|
| Frontend | 5173 | User interface |
| API Gateway | 8000 | Public API entry point and service routing |
| Auth Service | 8001 | Firebase authentication, users and sessions |
| Chat Service | 8002 | Conversations and messages |
| Agent Service | 8003 | AI routing, AI agents, RAG and file generation |
| Billing Service | 8004 | Credits, plans and Razorpay payments |
| Redis | 6379 | Sessions, memory and rate limiting |


🧠 AI Agent Architecture

The Agent Service acts as the main AI processing layer.
CortexAI uses LangGraph to route requests to different AI capabilities.

                         User Prompt
                              │
                              ▼
                       Agent Service
                              │
                              ▼
                       LangGraph Router
                              │
          ┌───────────┬───────┼────────┬───────────┐
          │           │       │        │           │
          ▼           ▼       ▼        ▼           ▼
        Chat        Search  Coding    PDF         PPT
          │           │       │        │           │
          │           │       │        │           │
          └───────────┴───────┴────────┴───────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
               PDF RAG            Image Analysis
The router can use the explicitly selected agent or automatically determine the appropriate capability.


🤖 AI Technologies
CortexAI integrates multiple AI providers and AI infrastructure.
Large Language Models
- Groq
- Google Gemini
- DeepSeek through OpenRouter
AI Orchestration
- LangGraph
- LangChain
Web Search
- Tavily
Vector Database
- Qdrant
Document Processing
- PDF Parse
- PDFKit
- PptxGenJS


💬 Normal Chat Flow

A normal conversation follows this general flow:
User
 │
 ▼
React Chat Interface
 │
 ▼
API Gateway
 │
 ▼
Agent Service
 │
 ▼
LangGraph Router
 │
 ▼
Chat Agent
 │
 ▼
Redis Conversation Memory
 │
 ▼
LLM Provider
 │
 ▼
Chat Service
 │
 ▼
MongoDB
 │
 ▼
Response
 │
 ▼
React Frontend

The Gateway acts as the public entry point, while the Agent Service handles AI orchestration and the Chat Service handles persistent conversation data.


📄 PDF Question Answering with RAG
CortexAI supports question answering over uploaded PDF documents using Retrieval-Augmented Generation (RAG).
The general pipeline is:
PDF Upload
    │
    ▼
Extract PDF Text
    │
    ▼
Split Text into Chunks
    │
    ▼
Generate Embeddings
    │
    ▼
Store Vectors in Qdrant
    │
    ▼
Similarity Search
    │
    ▼
Retrieve Relevant Context
    │
    ▼
Send Context to LLM
    │
    ▼
Generate Answer

This allows the AI to retrieve relevant information from the uploaded document before generating the response.


🖼️ Image Analysis
CortexAI can analyze uploaded images using a multimodal AI model.
The general flow is:
Image Upload
     │
     ▼
Agent Service
     │
     ▼
Image Processing
     │
     ▼
Gemini Vision Model
     │
     ▼
AI Analysis
     │
     ▼
User Response

💻 Coding Assistant
The coding agent supports multiple coding-related tasks including:
- Code generation
- Code explanation
- Code review
- Debugging
- Optimization
- Code conversion
- Documentation
The application can also generate code artifacts that can be displayed in the frontend using the Monaco Editor.


🔎 Web Search
CortexAI can perform web searches using Tavily.
The general flow is:
User Question
     │
     ▼
Search Agent
     │
     ▼
Tavily
     │
     ▼
Search Results
     │
     ▼
Chat / LLM Processing
     │
     ▼
Final Answer

Search results are passed into the AI processing pipeline so that the model can generate a response based on retrieved information.


📑 PDF Generation
CortexAI can generate PDF documents based on user requests.
The general process is:
User Request
     │
     ▼
PDF Agent
     │
     ▼
LLM Content Generation
     │
     ▼
PDFKit
     │
     ▼
Generated PDF
     │
     ▼
AWS S3
     │
     ▼
Signed Download URL


📊 PowerPoint Generation
CortexAI can generate PowerPoint presentations.
The process is:
User Request
     │
     ▼
PPT Agent
     │
     ▼
LLM Content Generation
     │
     ▼
PptxGenJS
     │
     ▼
PowerPoint File
     │
     ▼
AWS S3
     │
     ▼
Signed Download URL


🔐 Authentication
Authentication uses Firebase for identity verification.
The authentication flow is:
User
 │
 ▼
Firebase Authentication
 │
 ▼
Auth Service
 │
 ├── Verify Firebase identity
 ├── Find or create MongoDB user
 └── Create Redis session
 │
 ▼
HTTP-only Session Cookie
 │
 ▼
API Gateway

Redis is used for server-side session management.
MongoDB stores persistent user information.


🧠 Redis
Redis is used for several purposes in CortexAI.
Session Management
User sessions are stored server-side in Redis.
Conversation Memory
Recent conversation messages can be cached in Redis to reduce repeated database reads.
Rate Limiting
Redis is also used to track AI request limits.
This allows the application to share state across independent backend services.


🗄️ MongoDB
MongoDB is used for persistent application data.
It stores information such as:
- Users
- Conversations
- Messages
- Billing/payment records
- User plans
- Credits
Mongoose is used as the MongoDB object modeling library.


💳 Credits and Payments
CortexAI uses a credit-based usage system.
Different AI capabilities consume different amounts of credits.
Capability	Approximate Credit Usage
Chat	1
Web Search	5 + chat processing
Coding	10
PDF Generation	10
PPT Generation	10
Image Analysis	10


The application integrates Razorpay for paid plans.
Payment Flow
User
 │
 ▼
Create Razorpay Order
 │
 ▼
Razorpay Checkout
 │
 ▼
Payment
 │
 ▼
Payment Verification
 │
 ▼
Signature Verification
 │
 ▼
Update Payment Status
 │
 ▼
Update User Plan
 │
 ▼
Update Credits

Payment verification uses a cryptographic signature before the application updates the user's payment status and plan.


☁️ AWS S3
AWS S3 is used to store generated files such as:
- PDFs
- PowerPoint presentations
- Other generated artifacts
The Agent Service uploads generated files to S3 and can generate signed URLs for temporary access.


🗂️ Project Structure
CortexAI/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── backend/
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── docker-compose.yml
│   │
│   ├── gateway/
│   │   ├── package.json
│   │   └── ...
│   │
│   └── services/
│       │
│       ├── agent/
│       │   ├── package.json
│       │   └── ...
│       │
│       ├── auth/
│       │   ├── package.json
│       │   └── ...
│       │
│       ├── billing/
│       │   ├── package.json
│       │   └── ...
│       │
│       └── chat/
│           ├── package.json
│           └── ...
│
├── frontend/
│   ├── package.json
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── .gitignore
└── README.md

🛠️ Tech Stack
Frontend
- React
- React DOM
- Vite
- Redux Toolkit
- React Redux
- Tailwind CSS
- Axios
- Firebase
- Monaco Editor
- React Markdown
- React Icons
- Lucide React
- Motion
Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Redis
- ioredis
- Axios
AI
- LangChain
- LangGraph
- Groq
- Google Gemini
- DeepSeek
- OpenRouter
- Tavily
- Qdrant
File Processing
- Multer
- PDF Parse
- PDFKit
- PptxGenJS
Authentication
- Firebase
- Firebase Admin
Payments
- Razorpay
Cloud
- AWS S3
- Docker
- GitHub Actions
📦 Installation
Prerequisites
Before running CortexAI locally, install:
- Node.js
- npm
- MongoDB / MongoDB Atlas
- Redis
- Docker Desktop
- Git
You will also need accounts/API credentials for the external services used by the application.
🚀 Clone the Repository
git clone https://github.com/Laxmireddy91/CortexAI.git
cd CortexAI

📥 Install Dependencies
Each service has its own package.json.
Install dependencies for the frontend:
cd frontend
npm install

Install gateway dependencies:
cd ../backend/gateway
npm install

Install Agent Service dependencies:
cd ../services/agent
npm install

Install Auth Service dependencies:
cd ../auth
npm install

Install Billing Service dependencies:
cd ../billing
npm install

Install Chat Service dependencies:
cd ../chat
npm install

🔑 Environment Variables
Environment files are intentionally excluded from Git.
The project uses separate environment files for each component:
backend/gateway/.env
backend/services/agent/.env
backend/services/auth/.env
backend/services/billing/.env
backend/services/chat/.env
frontend/.env

Gateway Environment
PORT=
AUTH_SERVICE=
CHAT_SERVICE=
AGENT_SERVICE=
BILLING_SERVICE=
FRONTEND_URL=
REDIS_URL=

Agent Environment
PORT=
MONGODB_URI=
GROQ_API_KEY=
GOOGLE_API_KEY=
CHAT_SERVICE=
AUTH_SERVICE=
REDIS_URL=
TAVILY_API_KEY=
OPENROUTER_API_KEY=
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_KEY=
AWS_BUCKET_NAME=
QDRANT_API_KEY=
QDRANT_URL=

Auth Environment
PORT=
MONGODB_URI=
REDIS_URL=

Billing Environment
PORT=
MONGODB_URI=
AUTH_SERVICE=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

Chat Environment
PORT=
MONGODB_URI=

Frontend Environment
VITE_FIREBASE_API_KEY=
VITE_RAZORPAY_KEY_ID=
VITE_SERVER_URL=

Never commit real API keys, database credentials, Firebase credentials, AWS credentials, Razorpay secrets, or other sensitive values to GitHub.

▶️ Running the Application
CortexAI consists of multiple services, so each backend service can be started independently.
1. Start Redis
If using Docker:
cd backend
docker compose up -d

Redis runs on:
6379

2. Start Auth Service
Open a terminal:
cd backend/services/auth
npm run dev

Runs on:
http://localhost:8001

3. Start Chat Service
Open another terminal:
cd backend/services/chat
npm run dev

Runs on:
http://localhost:8002

4. Start Agent Service
Open another terminal:
cd backend/services/agent
npm run dev

Runs on:
http://localhost:8003

5. Start Billing Service
Open another terminal:
cd backend/services/billing
npm run dev

Runs on:
http://localhost:8004

6. Start API Gateway
Open another terminal:
cd backend/gateway
npm run dev

Runs on:
http://localhost:8000

The frontend communicates with the backend through the API Gateway.
7. Start Frontend
Open another terminal:
cd frontend
npm run dev

The frontend runs on:
http://localhost:5173

Open the URL in your browser.


🧪 Frontend Commands
From the frontend directory:
Development
npm run dev

Production Build
npm run build

Lint
npm run lint

Preview Production Build
npm run preview

🔌 Backend Commands
The Gateway and all backend services support:
Development
npm run dev

Production
npm start

🐳 Docker
Docker configuration is available in:
backend/docker-compose.yml

Docker can be used to simplify local infrastructure setup and deployment.

🚀 Deployment
The repository contains a GitHub Actions workflow:
.github/workflows/deploy.yml

The deployment architecture is designed around AWS services.
The workflow can build and deploy backend services using container images and deploy the frontend separately.
The project uses technologies including:
- AWS ECR
- AWS ECS
- AWS S3
- AWS CloudFront
- GitHub Actions

🔄 High-Level Request Flow
A typical user request follows this architecture:
┌─────────────────┐
│     Browser     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ React Frontend  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  API Gateway    │
│     :8000       │
└────────┬────────┘
         │
         ├──────────────► Auth Service :8001
         │
         ├──────────────► Chat Service :8002
         │
         ├──────────────► Agent Service :8003
         │                       │
         │                       ├── LangGraph
         │                       ├── Groq
         │                       ├── Gemini
         │                       ├── DeepSeek
         │                       ├── Tavily
         │                       ├── Qdrant
         │                       └── AWS S3
         │
         └──────────────► Billing Service :8004
                                  │
                                  └── Razorpay

🔒 Security
The project uses environment variables to keep sensitive credentials outside the source code.
The root .gitignore excludes environment files and other sensitive/generated files.
Important credentials that must never be committed include:
- MongoDB credentials
- API keys
- AWS access keys
- Firebase service credentials
- Razorpay secrets
- Qdrant credentials
- OpenRouter credentials
- Groq credentials
- Tavily credentials
Always use environment variables or a secure secrets manager for production deployments.

📈 Future Improvements
Potential improvements for future versions include:
- Automated unit and integration tests
- Stronger API validation
- Improved authorization and resource ownership checks
- Atomic credit transactions
- Better payment webhook handling
- Persistent document indexing for RAG
- Improved vector collection lifecycle management
- AI response streaming
- Better error handling
- Gateway-level rate limiting
- Security headers
- Structured logging
- Centralized monitoring
- Improved AI output validation
- Better deployment versioning
- Improved production observability


🎯 Project Goals
CortexAI aims to demonstrate how multiple AI capabilities can be combined into a single scalable application using a microservices-oriented architecture.
The project demonstrates practical use of:
- Full-stack development
- REST APIs
- Microservices
- Authentication
- Redis
- MongoDB
- AI agents
- LangGraph
- RAG
- Vector databases
- File processing
- Cloud storage
- Payment integration
- Docker
- CI/CD
- AWS deployment


👨‍💻 Project Information
Project: CortexAI
Type: AI-powered conversational platform
Architecture: Microservices-oriented
Frontend: React + Vite
Backend: Node.js + Express
Database: MongoDB
Cache / Session Store: Redis
AI Orchestration: LangGraph
Vector Database: Qdrant
Payments: Razorpay
Cloud Storage: AWS S3
Deployment: Docker + GitHub Actions + AWS


⭐ If you find this project useful
Feel free to explore the repository, review the architecture, and experiment with the different AI capabilities.
