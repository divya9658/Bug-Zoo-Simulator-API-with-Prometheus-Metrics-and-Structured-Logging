# 🐞 Bug Zoo Simulator API

A lightweight backend application that simulates a zoo by continuously generating random animal events. The project demonstrates backend development concepts such as REST APIs, Express.js, SQLite, Repository Pattern, Logging, Prometheus Metrics, and Global Error Handling.

---

# 📌 Project Overview

The Bug Zoo Simulator continuously generates random zoo events in the background (for example, _Lion escaped_, _Elephant sleeping_, _Tiger needs medical attention_). These events are stored in a SQLite database and exposed through REST APIs.

The project was built to understand real-world backend architecture by implementing concepts such as:

- Express.js Server
- Environment Variables
- SQLite Database
- Repository Pattern
- REST APIs
- Dynamic SQL Queries
- Logging using Winston
- Monitoring using Prometheus
- Express Middleware
- Global Error Handling

---

# 🚀 Features

- Background event simulation
- Automatic event generation at configurable intervals
- SQLite database storage
- Retrieve all events
- Filter events by animal
- Filter events by severity
- Event statistics using SQL aggregation
- Structured logging with Winston
- Prometheus metrics endpoint
- Centralized error handling
- Clean layered architecture

---

# 🏗️ Project Architecture

```
                Client
                   │
                   ▼
            Express Server
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
     API Routes         Middleware
         │                   │
         ▼                   ▼
   Repository Layer     Error Handler
         │
         ▼
     SQLite Database

Background Simulator
         │
         ▼
 Event Generator
         │
         ▼
 Repository
         │
         ▼
 Logger + Prometheus Metrics
```

---

# 📁 Folder Structure

```
BugZooSimulator/

├── src/
│
├── api/
│   ├── routes/
│   │   ├── eventRoutes.js
│   │   └── metricsRoutes.js
│   │
│   └── middleware/
│       └── errorHandler.js
│
├── engine/
│   └── simulator/
│       ├── simulator.js
│       └── eventGenerator.js
│
├── shared/
│   ├── logger.js
│   └── metrics.js
│
├── store/
│   ├── database/
│   │   └── database.js
│   │
│   └── repositories/
│       └── eventRepository.js
│
├── main/
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

# ⚙️ Technologies Used

- Node.js
- Express.js
- SQLite3
- Winston
- Prometheus (prom-client)
- dotenv
- uuid

---

# 🔧 Installation

Clone the repository.

```bash
git clone https://github.com/divya9658/Bug-Zoo-Simulator-API-with-Prometheus-Metrics-and-Structured-Logging
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

Example:

```env
PORT=3000
SIMULATION_INTERVAL_MS=2000
```

Start the server.

```bash
npm start
```

---

# 📡 API Endpoints

## Home

```
GET /
```

Returns a welcome message.

---

## Get All Events

```
GET /events
```

Returns all generated events.

---

## Filter by Animal

```
GET /events?animal=Lion
```

Returns only Lion events.

---

## Filter by Severity

```
GET /events?severity=ERROR
```

Returns only ERROR events.

---

## Filter by Animal and Severity

```
GET /events?animal=Lion&severity=WARN
```

Returns matching records using dynamic SQL.

---

## Event Statistics

```
GET /events/stats
```

Returns aggregated event counts grouped by animal and severity.

Example response:

```json
{
  "Lion": {
    "INFO": 12,
    "WARN": 5,
    "ERROR": 2
  }
}
```

---

## Prometheus Metrics

```
GET /metrics
```

Returns application metrics in Prometheus format.

Example:

```
events_generated_total 245
```

---

# 🗄️ Database Schema

| Column    | Type |
| --------- | ---- |
| id        | TEXT |
| timestamp | TEXT |
| animal    | TEXT |
| message   | TEXT |
| severity  | TEXT |

---

# 💡 Design Decisions

## Why Express?

Express simplifies backend development by providing routing, middleware, and request handling with minimal code.

---

## Why SQLite?

SQLite is lightweight, serverless, and ideal for learning backend concepts without requiring a separate database server.

---

## Why Repository Pattern?

The Repository Pattern separates database logic from business logic.

Benefits:

- Better maintainability
- Easier testing
- Database can be replaced without changing business logic

---

## Why Express Router?

Instead of placing all endpoints inside `server.js`, routers organize APIs by responsibility.

This keeps the project modular and easier to maintain.

---

## Why Environment Variables?

Configuration values such as ports and simulation intervals should not be hardcoded.

Using `.env` improves portability and security.

---

## Why Winston?

Winston provides structured logging with different log levels.

Levels used:

- INFO
- WARN
- ERROR

---

## Why Prometheus?

Prometheus continuously collects application metrics.

Unlike logs, metrics provide numerical information such as:

- Total generated events
- Total API requests
- Total errors

This helps monitor application health.

---

## Logs vs Metrics

### Logs

Used for debugging.

Example:

```
INFO Lion Sleeping
WARN Tiger Escaped
ERROR Database Failed
```

### Metrics

Used for monitoring.

Example:

```
events_generated_total 450
http_requests_total 900
```

---

## Why Middleware?

Middleware executes between the request and response.

Uses:

- Authentication
- Logging
- Error Handling
- Monitoring

---

## Why Global Error Handling?

Instead of handling errors inside every route, Express uses one centralized middleware.

Routes simply call:

```javascript
next(err);
```

The middleware:

- Logs the detailed error
- Sends a safe response to the client

Benefits:

- Cleaner code
- Less duplication
- Better security
- Easier maintenance

---

# 📊 Monitoring

Prometheus metrics are available at:

```
GET /metrics
```

The endpoint returns plain text because Prometheus expects metrics in its own format instead of JSON.

---

# 🔐 Environment Variables

| Variable            | Description                              |
| ------------------- | ---------------------------------------- |
| PORT                | Server port                              |
| SIMULATION_INTERVAL | Event generation interval (milliseconds) |

---

# 🚀 Future Improvements

- PostgreSQL support
- Docker containerization
- Automated testing using Jest & Supertest
- Swagger/OpenAPI documentation
- Authentication & Authorization
- Pagination for events
- Event deletion API
- WebSocket support for live events

---

# 📚 Learning Outcomes

This project helped reinforce the following backend concepts:

- Express.js fundamentals
- REST API development
- Express Router
- Environment Variables
- SQLite integration
- Repository Pattern
- Dynamic SQL Queries
- SQL Aggregation (`GROUP BY`)
- Logging with Winston
- Prometheus Monitoring
- Middleware
- Global Error Handling
- Layered Architecture
- Separation of Concerns
- DRY Principle
- Single Responsibility Principle (SRP)

---

# 👩‍💻 Author

Konathala Divyateja

Developed as a backend learning project to understand real-world Node.js architecture and software engineering principles.
