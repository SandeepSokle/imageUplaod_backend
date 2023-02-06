const { db } = require("../database/database");

const imageSchema = db.mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: null,
  },
  describe: {
    type: String,
    required: true,
    default: null,
  },
  views: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const imageModel = db.mongoose.model("images", imageSchema);
module.exports = imageModel;
