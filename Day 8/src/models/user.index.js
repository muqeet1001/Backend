const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  number: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
