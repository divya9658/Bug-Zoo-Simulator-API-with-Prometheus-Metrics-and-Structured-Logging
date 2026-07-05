const logger = require("../../shared/logger");

function errorHandler(err, req, res, next) {
    // Log the detailed error for developers
    logger.error(err.stack || err.message);

    // Send a safe response to the client
    res.status(500).json({
        error: "Internal Server Error"
    });
}

module.exports = errorHandler;