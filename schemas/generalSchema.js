const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: String,
  recommendedCourse: String,
});

module.exports = mongoose.model("User", UserSchema);
