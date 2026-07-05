// import app from "../server.js";
const express = require('express');
// const app = express();

const router = express.Router();
const { getEvents, getStats } = require("../../store/repositories/eventRepository");

router.get("/", (req, res) => {
    const { animal, severity } = req.query;

    getEvents({ animal, severity }, (err, rows) => {
        if (err) {
            return res.status(500).json({
                error: "Failed to fetch events"
            });
        }

        res.json(rows);
    });
});

router.get("/stats", (req, res) => {
    getStats((err, rows) => {
        if (err) {
            return res.status(500).json({
                error: "Failed to fetch event statistics"
            });
        }

        res.json(rows);
    });
});

module.exports = router;

// module.exports = app;