const mongoose = require('mongoose');

// Construct the MongoDB URI using the password from the environment variable
const dbURI =  "mongodb+srv://pillowcasestudies:q8uehHZTltPIicYm@samplecluster.jb8w0.mongodb.net/?retryWrites=true&w=majority&appName=samplecluster";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error ❌:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;