const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoints
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

app.use(express.static(path.join(__dirname, "../frontend/public")));

// Start the servers
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});