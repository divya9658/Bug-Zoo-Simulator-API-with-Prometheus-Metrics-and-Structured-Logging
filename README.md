# 🐞 Bug Zoo Simulator API

A lightweight backend application that simulates a zoo by continuously generating random animal events. The project demonstrates real-world backend development concepts such as REST APIs, Express.js, SQLite, Repository Pattern, Structured Logging, Request Tracing, Prometheus Metrics, Automated Testing, and Global Error Handling.

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
- Structured Logging with Winston
- Request Tracing
- Monitoring with Prometheus
- Automated Testing
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
- Structured JSON logging with Winston
- Request tracing using Trace IDs
- Request logging middleware
- Prometheus metrics endpoint
- Centralized error handling
- Automated unit tests with Jest
- Integration tests with Supertest
- Clean layered architecture

---

# 🏗️ Project Architecture

```text
                Client
                   │
                   ▼
          Express Application
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 Trace Middleware      Request Logger
        │
        ▼
      Routes
        │
        ▼
 Repository Layer
        │
        ▼
   SQLite Database

Background Simulator
        │
        ▼
  Event Generator
        │
        ▼
 Repository Layer
        │
        ├── Winston Logger
        └── Prometheus Metrics

Errors
   │
   ▼
Global Error Handler
```

---

# 📁 Folder Structure

```text
bug-zoo-simulator/

├── src/
│   ├── api/
│   │   ├── routes/
│   │   │   ├── eventRoutes.js
│   │   │   └── metricsRoutes.js
│   │   │
│   │   └── middleware/
│   │       ├── traceMiddleware.js
│   │       ├── requestLogger.js
│   │       └── errorHandler.js
│   │
│   ├── engine/
│   │   └── simulator/
│   │       ├── simulator.js
│   │       └── eventGenerator.js
│   │
│   ├── observability/
│   │   ├── logger.js
│   │   └── metrics.js
│   │
│   ├── store/
│   │   ├── database/
│   │   │   └── database.js
│   │   │
│   │   └── repositories/
│   │       └── eventRepository.js
│   │
│   └── main/
│       └── server.js
│
├── tests/
│   ├── unit/
│   │   └── eventGenerator.test.js
│   │
│   └── integration/
│       ├── events.test.js
│       └── metrics.test.js
│
├── .env.example
├── .gitignore
├── README.md
└── package.json
```

---

# ⚙️ Technologies Used

- Node.js
- Express.js
- SQLite3
- Winston
- Prometheus (prom-client)
- Jest
- Supertest
- dotenv
- uuid

---

# 🔧 Installation

Clone the repository:

```bash
git clone https://github.com/divya9658/Bug-Zoo-Simulator-API-with-Prometheus-Metrics-and-Structured-Logging.git
```

Navigate to the project directory:

```bash
cd Bug-Zoo-Simulator-API-with-Prometheus-Metrics-and-Structured-Logging
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
SIMULATION_INTERVAL_MS=2000
```

Start the application:

```bash
npm start
```

---

# 📡 API Endpoints

## Home

```http
GET /
```

Returns a welcome message.

---

## Get All Events

```http
GET /events
```

Returns all generated events.

---

## Filter by Animal

```http
GET /events?animal=Lion
```

Returns only Lion events.

---

## Filter by Severity

```http
GET /events?severity=ERROR
```

Returns only ERROR events.

---

## Filter by Animal and Severity

```http
GET /events?animal=Lion&severity=WARN
```

Returns matching records using dynamic SQL filtering.

---

## Event Statistics

```http
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

```http
GET /metrics
```

Returns application metrics in Prometheus format.

Example:

```text
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

Winston provides structured logging with multiple log levels.

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

This helps monitor application health and performance.

---

## Why Middleware?

Middleware executes between the request and response.

Uses:

- Request tracing
- Logging
- Authentication
- Error handling
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

# 📊 Observability

## Logs vs Metrics

### Logs

Used for debugging and understanding application behavior.

Example:

```text
INFO Lion Sleeping
WARN Tiger Escaped
ERROR Database Failed
```

### Metrics

Used for monitoring trends and system health.

Example:

```text
events_generated_total 450
http_requests_total 900
```

---

## Request Tracing with Trace IDs

Every incoming request receives a unique `trace_id`.

The trace ID is included in logs, making it easy to follow a request through different parts of the application.

Example:

```json
{
  "traceId": "8f91b4d2-7a6b-4d67-a4f0-8e2b4d9c9d53",
  "method": "GET",
  "url": "/events",
  "status": 200
}
```

Benefits:

- Faster debugging
- Easier log correlation
- Improved observability
- Better production troubleshooting

---

# 📊 Monitoring

Prometheus metrics are available at:

```http
GET /metrics
```

The endpoint returns plain text because Prometheus expects metrics in its own format rather than JSON.

---

# 🧪 Testing

The application includes both unit and integration tests.

## Unit Tests

Unit tests validate the event generation logic.

Covered scenarios:

- INFO severity generation
- WARN severity generation
- ERROR severity generation
- Event object structure validation

Randomness is controlled by mocking `Math.random()` to ensure deterministic and reliable test results.

## Integration Tests

Integration tests validate API behavior.

Covered endpoints:

- `GET /events`
- `GET /events?severity=ERROR`
- `GET /metrics`

The tests verify response formats, filtering behavior, and Prometheus metric exposure.

Run tests using:

```bash
npm test
```

---

# 🔐 Environment Variables

| Variable               | Description                               |
| ---------------------- | ----------------------------------------- |
| PORT                   | Server port                               |
| SIMULATION_INTERVAL_MS | Event generation interval in milliseconds |

---

# 🚀 Future Improvements

- PostgreSQL support
- Docker containerization
- Dedicated test database for integration tests
- Swagger/OpenAPI documentation
- Authentication & Authorization
- Pagination for events
- Event deletion API
- WebSocket support for live events

---

# 📚 Learning Outcomes

This project helped reinforce the following backend concepts:

- Express.js Fundamentals
- REST API Development
- Express Router
- Environment Variables
- SQLite Integration
- Repository Pattern
- Dynamic SQL Queries
- SQL Aggregation (`GROUP BY`)
- Logging with Winston
- Prometheus Monitoring
- Request Tracing
- Middleware
- Global Error Handling
- Automated Testing
- Mocking and Test Isolation
- API Integration Testing
- Layered Architecture
- Separation of Concerns
- DRY Principle
- Single Responsibility Principle (SRP)

---

# 👨‍💻 Author

**Konathala Divyateja**

Developed as a backend learning project to understand real-world Node.js architecture, observability, testing, and software engineering principles.
