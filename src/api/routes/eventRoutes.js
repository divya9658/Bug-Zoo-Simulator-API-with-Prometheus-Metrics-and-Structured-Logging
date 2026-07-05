// import app from "../server.js";
const express = require('express');
// const app = express();

const router = express.Router();
const { getEvents } = require("../../store/repositories/eventRepository");

router.get("/", (req, res) => {
    getEvents((err, rows) => {
        if (err) {
            return res.status(500).json({
                error: "Failed to fetch events"
            });
        }

        res.json(rows);
    });
});

module.exports = router;

// module.exports = app;