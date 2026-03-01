const chatService = require("../services/chatService");
const { validationResult } = require("express-validator");

const sendMessage = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { message } = req.body;
        const response = await chatService.handleChat(message);
        res.json(response);

    } catch (error) {
        next(error);
    }
}

const getHistory = async (req, res) => {
    try {
        const history = await chatService.getChatHistory();
        res.json(history);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports = {
    sendMessage,
    getHistory,
};