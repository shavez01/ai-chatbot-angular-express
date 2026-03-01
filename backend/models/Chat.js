const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    userMessage: String,
    aiResponse: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Chat", chatSchema);