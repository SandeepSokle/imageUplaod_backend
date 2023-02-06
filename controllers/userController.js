const userModel = require("../models/userSchema");

const getUsers = async (req, res, next) => {
  try {
    let users = await userModel.find();
    res.status(200).send({ msg: "All User List", users });
  } catch (err) {
    res.status(400).send(err);
  }
};

const signup = async (req, res, next) => {
  const data = req.body;
  try {
    let user = await userModel.create(data);
    res.status(200).send({ msg: "Sign up successfully", user });
  } catch (err) {
    res.status(400).send(err);
  }
};

const login = async (req, res, next) => {
  const data = req.body;
  try {
    let user = await userModel.findOne({ email: data.email });
    if (user) {
      res.status(200).send({ msg: "User Found", user });
    } else {
      throw { err: "User Not Found" };
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getUsers,
  signup,
  login,
};
