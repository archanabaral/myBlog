const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator/check");

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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, mobile, intro, profile } = req.body;

  try {
    let user = await User.findOne({ where: { email: email } });

    if (user) {
      return res
        .status(400)
        .json({ msg: `User with this email ${email} already exists` });
    }

    user = new User({
      name,
      email,
      password,
      mobile,
      intro,
      profile,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, password, mobile, profile, intro } = req.body;
    const user = await User.findByPk(req.params.id);
    (user.name = name),
      (user.email = email),
      (user.password = password),
      (user.mobile = mobile),
      (user.profile = profile),
      (user.intro = intro);

    await user.save();

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};
