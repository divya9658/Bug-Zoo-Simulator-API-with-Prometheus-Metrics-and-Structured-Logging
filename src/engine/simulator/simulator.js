const generateEvent = require("./eventGenerator");

function startSimulation() {
    setInterval(() => {
        const { saveEvent } = require("../../store/repositories/eventRepository");

        const event = generateEvent();

        saveEvent(event);

        console.log(event);
    }, process.env.SIMULATION_INTERVAL || 2000);
}

module.exports = startSimulation;