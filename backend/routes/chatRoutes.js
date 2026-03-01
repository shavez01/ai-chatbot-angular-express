const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
const { body } = require("express-validator");

router.post(
    "/",
    body("message").notEmpty().withMessage("Message cannot be empty"),
    chatController.sendMessage
);
router.get("/history", chatController.getHistory);

module.exports = router;