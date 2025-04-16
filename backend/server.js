require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// API route for form submission
app.post("/api/users", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required." });
    }

    const newUser = new User({ email, message });
    await newUser.save();

    res.status(201).json({ message: "User data saved successfully!" });
  } catch (err) {
    console.error("Error saving user data:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Catch-all route to serve frontend (e.g., React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});