const User = require("../models/UserModel");

// GET ALL USER
const getAllUsers = async (req, res) => {
  let allUsers = await User.find({});
  res.send(allUsers);
  console.log(req.body);
  console.log("GET ALL USER");
};

// POST USER
const postUser = async (req, res) => {
  const newUser = new User(req.body);
  newUser.save();

  console.log("POST USER");
  // console.log(req.body);
};

// DELETE USER
const deleteUser = async (req, res) => {
  let Userid = req.params.id;
  let deletedUser = await User.findByIdAndDelete(Userid);
  console.log("DELETE USER", deletedUser);
};

// GET USER BY ID
const getUserById = async (req, res) => {
  let Userid = req.params.id;
  let findUser = await User.findOne({ _id: Userid });
  res.send(findUser);

  console.log("GET USER BY ID");
};

// GET UPDATE USER
const getUpdateUser = async (req, res) => {
  let Userid = req.params.id;
  let updatedUser = await User.findOneAndUpdate({ _id: Userid }, req.body);
  console.log("GET UPDATE USER", updatedUser);
};

// PUT USER
const putUser = async (req, res) => {
  let Userid = req.params.id;
  let updatedUser = await User.replaceOne({ _id: Userid }, req.body);
  console.log("PUT USER", updatedUser);
};

module.exports = {
  postUser,
  getAllUsers,
  deleteUser,
  getUserById,
  getUpdateUser,
  putUser,
};
