const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};
