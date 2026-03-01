const Chat = require("../models/Chat");
const redisClient = require("../config/redis");
const logger = require("../config/logger");

const generateMockResponse = (message) => {
    return `AI says: I received your message - "${message}"`;
};

const handleChat = async (message) => {

    // 🔥 Check Redis cache first
    const cached = await redisClient.get(message);
    if (cached) {
        return JSON.parse(cached);
    }

    const aiReply = generateMockResponse(message);

    const chat = await Chat.create({
        userMessage: message,
        aiResponse: aiReply,
    });

    // 🔥 Cache response for 60 seconds
    await redisClient.setEx(message, 60, JSON.stringify(chat));

    return chat;
};

const getChatHistory = async () => {
    return await Chat.find().sort({ createdAt: 1 });
};

module.exports = {
    handleChat,
    getChatHistory,
};