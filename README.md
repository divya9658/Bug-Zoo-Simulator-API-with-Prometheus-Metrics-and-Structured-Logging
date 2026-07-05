Here’s a clean `README.md` for your **Bug Zoo Simulator** project:

---

# 🐛 Bug Zoo Simulator

A lightweight event-driven backend system that simulates real-time zoo events like animals eating, escaping, jumping, and sleeping. Built with Node.js and structured using clean architecture principles.

It exposes APIs to fetch events, filter them, and view statistics + Prometheus metrics.

---

## 🚀 Tech Stack

* Node.js – Backend runtime
* Express.js – REST API framework
* SQLite – Data storage
* dotenv – Config management
* uuid – Event IDs
* pino – Logging
* prom-client – Metrics
* nodemon – Development tool
* Jest – Unit testing
* Supertest – Integration testing

---

## 📁 Project Structure

```
bug-zoo-simulator
│
├── src
│   ├── api
│   │   ├── routes          # GET /events, /stats, etc.
│   │   └── middleware      # Logging, tracing, auth
│   │
│   ├── engine
│   │   └── simulator       # Event generation engine
│   │
│   ├── store
│   │   └── database        # SQLite setup + repository layer
│   │
│   ├── observability
│   │   ├── logger          # pino logger setup
│   │   └── metrics         # Prometheus metrics
│   │
│   └── main                # Application bootstrap
│
├── tests
│   ├── unit
│   └── integration
│
├── .env
└── server.js
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=3000
LOG_LEVEL=info
SIMULATION_INTERVAL_MS=2000
```

### What they do:

* `PORT` → Server port (default fallback: 3000)
* `LOG_LEVEL` → Logging verbosity
* `SIMULATION_INTERVAL_MS` → Event generation speed

---

## 🧠 Architecture Overview

### 1. Event Engine

A self-running simulator continuously generates zoo events:

```
Lion ate food
Tiger escaped
Monkey jumped
Elephant slept
```

It runs independently of API requests.

---

### 2. Separation of Concerns

* API layer → Handles HTTP requests
* Engine → Generates events
* Store → Handles database (SQLite only)
* Observability → Logging + metrics

Each layer has a single responsibility.

---

### 3. Database Layer

Uses SQLite (single file database).

Key idea:

> The API never talks to SQL directly.

Instead:

```
Route → Repository → SQLite
```

---

## 📡 API Endpoints

### Get all events

```
GET /events
```

### Filter events

```
GET /events?animal=Lion&severity=ERROR
```

### Get statistics

```
GET /stats
```

### Prometheus metrics

```
GET /metrics
```

---

## 📊 Query Parameters Example

Request:

```
GET /events?animal=Tiger&severity=WARN
```

Automatically becomes:

```js
req.query = {
  animal: "Tiger",
  severity: "WARN"
}
```

---

## 🔄 Event Simulation Flow

```
Server starts
   ↓
Simulator starts
   ↓
Generate event
   ↓
Wait (interval)
   ↓
Repeat forever
```

---

## 🧪 Testing

### Run unit tests

```bash
npm run test:unit
```

### Run integration tests

```bash
npm run test:integration
```

Uses:

* Jest
* Supertest

---

## 📈 Observability

### Logging

Powered by pino

### Metrics

Powered by prom-client

Exposes:

* Event count
* Event types distribution
* Error rate
* System health

---

## 🏁 Run the Project

```bash
npm install
npm run dev
```

Server starts at:

```
http://localhost:3000
```

---

## 💡 Key Design Principles

* Single Responsibility Principle
* Separation of Concerns
* Repository Pattern for DB isolation
* Event-driven architecture
* Observable system (logs + metrics)

---

If you want, I can also:

* add a **system design diagram (visual)**
* convert this into a **GitHub-ready professional README with badges**
* or help you write **Docker setup for this project**
