const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);