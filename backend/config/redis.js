const { createClient } = require('redis');

const redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => console.log('Redis Error', err));

(async () => {
    await redisClient.connect();
})();

module.exports = redisClient;