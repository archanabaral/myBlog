const Tag = require("../models/Tag");

exports.getTag = async (req, res) => {
  try {
    const tag = await Tag.findAll();
    res.json(tag);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

exports.createTag = async (req, res) => {
  try {
    const tag = await Tag.create(req.body);

    res.status(201).json({
      success: true,
      data: tag,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

exports.updateTag = async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

exports.deleteTag = async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    await tag.destroy();
    res.json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};
