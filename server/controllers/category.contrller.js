const Category = require("../models/Category");

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findAll();
    res.json(category);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json({
      success: true,
      data: category,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.update(req.body, {
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

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    await category.destroy();
    res.json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};
