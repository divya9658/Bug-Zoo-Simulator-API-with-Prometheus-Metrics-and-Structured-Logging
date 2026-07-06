require('dotenv').config();
require("../store/database/database");
const startSimulation = require("../engine/simulator/simulator");
const eventRoutes = require("../api/routes/eventRoutes");
const metricsRoutes = require("../api/routes/metricsRoutes");
const errorHandler = require("../api/middleware/errorHandler");
const traceId = require("../api/middleware/traceMiddleware");
const requestLogger = require("../api/middleware/requestLogger");

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.json({
        message: "Welcome to Bug Zoo Simulator API"
    })
})

app.use(traceMiddleware);
app.use(requestLogger);

app.use("/events", eventRoutes);
app.use("/metrics", metricsRoutes);

app.use(errorHandler);

startSimulation();   

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on ${port}`);
    });
}

module.exports = app;