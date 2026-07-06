const logger = require("../../observability/logger");

function requestLogger(req, res, next) {
    const start = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - start;

        logger.info({
            traceId: req.traceId,
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            duration: `${duration}ms`
        });
    });

    next();
}

module.exports = requestLogger;