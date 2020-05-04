const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "Please provide your email"]
  },
  password: {
    type: String,
    required: [true, "Please provide your password"]
  }
});

UserSchema.pre("save", function(next) {
  const user = this;
  console.log(user.password);
  encrypted = bcrypt.hashSync(user.password);
  user.password = encrypted;
  console.log(user.password);
  next();
});

const user = mongoose.model("user", UserSchema);
module.exports = user;
