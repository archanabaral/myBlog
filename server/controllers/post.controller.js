const Post = require("../models/Post");
const User = require("../models/User");

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findAll({ where: { userId: req.user.id } });
    res.json(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

exports.createPost = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    const post = await Post.create(req.body);
    res.status(201).json({
      success: true,
      data: post,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    await post.destroy();
    res.json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};
