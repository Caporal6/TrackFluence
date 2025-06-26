const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  avatar: { type: String, required: true },
  accessToken: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
