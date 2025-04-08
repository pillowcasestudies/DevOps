const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Get the absolute path to the frontend/public folder
const staticDir = path.resolve(__dirname, "../frontend/public");

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the absolute path of the 'frontend/public' directory
app.use(express.static(staticDir));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// Serve index.html on the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});