const express = require("express");
const {
  getImages,
  uploadImage,
  Views,
} = require("../controllers/ImageController");
var router = express.Router();

router.get("/", getImages);
router.post("/upload", uploadImage);
router.post("/views", Views);

module.exports = router;
