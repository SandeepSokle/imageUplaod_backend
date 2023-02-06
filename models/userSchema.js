const { db } = require("../database/database");

const userSchema = db.mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = db.mongoose.model("users", userSchema);
module.exports = userModel;
