require('dotenv').config();
require("../store/database/database");
const startSimulation = require("../engine/simulator/simulator");
const eventRoutes = require("../api/routes/eventRoutes");
const metricsRoutes = require("../api/routes/metricsRoutes");
const errorHandler = require("../api/middleware/errorHandler");

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.json({
        message: "Welcome to Bug Zoo Simulator API"
    })
})

app.use("/events", eventRoutes);
app.use("/metrics", metricsRoutes);

app.use(errorHandler);

startSimulation();   

app.listen(port, () => {
    console.log(`server running from port ${port}...`);
})