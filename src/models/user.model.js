const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  books: {
    type: [mongoose.Types.ObjectId],
    default: []
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;