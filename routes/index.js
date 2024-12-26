const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
   res.send("Welcome to the Node.js API");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});

mongoose
   .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.log(err));
