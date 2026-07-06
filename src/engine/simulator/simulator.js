const generateEvent = require("./eventGenerator");
const logger = require("../../observability/logger");
const eventsGenerated = require("../../observability/metrics").eventsGenerated;

function startSimulation() {
    setInterval(() => {
        const { saveEvent } = require("../../store/repositories/eventRepository");

        const event = generateEvent();

        saveEvent(event);

        eventsGenerated.inc();
        logger.info(`${event.animal} - ${event.message} (${event.severity})`);
        
    }, process.env.SIMULATION_INTERVAL || 2000);
}

module.exports = startSimulation;