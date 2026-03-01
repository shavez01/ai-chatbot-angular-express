require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");
const limiter = require("./middleware/rateLimiter");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/chatbot", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

app.use(limiter);
app.use(errorHandler);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));