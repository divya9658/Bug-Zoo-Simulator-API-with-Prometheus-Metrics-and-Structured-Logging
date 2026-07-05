const client = require("prom-client");

const eventsGenerated = new client.Counter({
    name: "events_generated_total",
    help: "Total number of zoo events generated"
});

module.exports = {
    eventsGenerated
};