const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const mongo_config = require("../config/mongo_config");

const db = {
  mongoose,
  url: mongo_config.url,
};

module.exports = {
  db,
};
