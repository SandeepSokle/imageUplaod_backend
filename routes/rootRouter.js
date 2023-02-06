var express = require("express");
const imageRouter = require("./imageRouter");
const userRouter = require("./userRouter");

var router = express.Router();

router.use("/users", userRouter);
router.use("/images", imageRouter);

module.exports = router;
