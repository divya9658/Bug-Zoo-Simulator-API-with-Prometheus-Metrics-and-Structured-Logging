const db = require("../database/database");
const logger = require("../../shared/logger");

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
                logger.error("Failed to save event:", err);
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
    db.all(
        `
        SELECT
            severity,
            COUNT(*) AS count
        FROM events
        GROUP BY severity
        `,
        [],
        (err, rows) => {
            if (err) {
                return callback(err);
            }

            let stats = {};

            for (const row of rows) {
                stats[row.severity] = row.count;
            }

            callback(null, stats);
        }
    );
}
module.exports = {
    saveEvent,
    getEvents,
    getStats
};
        