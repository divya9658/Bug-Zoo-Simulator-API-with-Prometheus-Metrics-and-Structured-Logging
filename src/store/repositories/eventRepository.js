const db = require("../database/database");

function saveEvent(event) {
    const { id, timestamp, animal, message, severity } = event;
    db.run(
        `
        INSERT INTO events (
            id,
            timestamp,
            animal,
            message,
            severity
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            event.id,
            event.timestamp,
            event.animal,
            event.message,
            event.severity
        ],
        (err) => {
            if (err) {
                console.error("Failed to save event:", err);
            }
        }
    );
}

function getEvents(callback) {
    db.all(
        `
        SELECT *
        FROM events
        ORDER BY timestamp DESC
        `,
        [],
        (err, rows) => {
            callback(err, rows);
        }
    );
}
module.exports = {
    saveEvent,
    getEvents
};