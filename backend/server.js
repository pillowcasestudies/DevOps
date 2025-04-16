require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());



const frontendPath = path.join(__dirname, "../backend/frontend/out");
app.use(express.static(frontendPath));


app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Health check endpoints
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});



// Start the database
const connectDB = require('./db');
connectDB();

const User = require('./models/User');

// 🔥 New POST endpoint
app.post('/api/users', async (req, res) => {
  try {
    const { email, message } = req.body;

    // Save to MongoDB
    const newUser = new User({ email, message });
    await newUser.save();

    res.status(201).json({ message: 'User data saved successfully!' });
  } catch (err) {
    console.error('Error saving user data:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});