const { v4: uuidv4 } = require("uuid");

const animals = [
    "Lion",
    "Tiger",
    "Elephant",
    "Monkey",
    "Penguin",
    "Zebra",
    "Tarantula"
];

const messages = [
    "Ate lunch",
    "Escaped enclosure",
    "Sleeping",
    "Playing",
    "Glass enclosure cracked",
    "Roared loudly",
    "Needs medical attention"
];

function generateEvent() {
    const rand = Math.random();

    let severity = "INFO";

    if (rand > 0.90) {
        severity = "ERROR";
    } else if (rand > 0.70) {
        severity = "WARN";
    }

    const animal =
        animals[Math.floor(Math.random() * animals.length)];

    const message =
        messages[Math.floor(Math.random() * messages.length)];

    return {
        id: uuidv4(),
        timestamp: new Date().toISOString(),
        animal,
        message,
        severity
    };
}

module.exports = generateEvent;