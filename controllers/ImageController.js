const imageModel = require("../models/imageSchema");
const getImages = async (req, res, next) => {
  try {
    let images = await imageModel.find();
    res.status(200).send({ msg: "All Image List", images });
  } catch (err) {
    res.status(400).send(err);
  }
};
const uploadImage = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  try {
    let image = await imageModel.create(data);
    res.status(200).send({ msg: "upload successfully", image });
  } catch (err) {
    res.status(400).send(err);
  }
};
const Views = async (req, res, next) => {
  try {
    let image = await imageModel.findOneAndUpdate(
      { _id: req.body.id },
      {
        $inc: { views: 1 },
      },
      { new: true }
    );
    res.status(200).send({ msg: "Views Increased", image });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getImages,
  uploadImage,
  Views,
};
