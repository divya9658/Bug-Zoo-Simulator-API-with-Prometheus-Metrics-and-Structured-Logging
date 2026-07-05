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

function getEvents(filters, callback) {
    let query = `
        SELECT *
        FROM events
    `;

    let values = [];

    if (filters.animal) {
        query += " WHERE animal = ?";
        values.push(filters.animal);
    }

    if (filters.severity) {
        query += filters.animal
            ? " AND severity = ?"
            : " WHERE severity = ?";

        values.push(filters.severity);
    }

    query += " ORDER BY timestamp DESC";

    db.all(query, values, (err, rows) => {
        callback(err, rows);
    });
};

function getStats(callback) {
    const query = `SELECT severity,COUNT(*) AS count FROM events GROUP BY severity;`
    db.all(query, [], (err, rows) => {
        callback(err, rows);
    });
};
module.exports = {
    saveEvent,
    getEvents,
    getStats
};
        