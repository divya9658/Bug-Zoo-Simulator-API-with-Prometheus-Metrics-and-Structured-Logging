const express = require("express");
const router = express.Router();
const client = require("prom-client");

router.get("/", async (req, res) => {
    // console.log("Metrics route called");
    res.set("Content-Type", client.register.contentType);
    res.send(await client.register.metrics());
});

module.exports = router;