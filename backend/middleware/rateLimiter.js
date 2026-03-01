const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20, // 20 requests per minute per IP
    message: {
        error: "Too many requests. Please try again later."
    }
});

module.exports = limiter;