const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Account", AccountSchema);
