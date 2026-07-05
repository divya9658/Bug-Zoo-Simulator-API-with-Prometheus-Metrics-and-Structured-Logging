const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, "../../../bug-zoo.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection failed", err);
    } else {
        console.log("Connected to SQLite database");
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS events (
            id TEXT PRIMARY KEY,
            timestamp TEXT NOT NULL,
            animal TEXT NOT NULL,
            message TEXT NOT NULL,
            severity TEXT NOT NULL
        )
    `);
});

module.exports = db;