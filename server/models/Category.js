const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const SequelizeSlugify = require("sequelize-slugify");

const category = sequelize.define("category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  parentId: {
    type: Sequelize.BIGINT,
  },

  title: {
    type: Sequelize.STRING,
  },

  metaTitle: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
    unique: true,
  },

  content: Sequelize.TEXT,
});
SequelizeSlugify.slugifyModel(category, {
  source: ["title"],
});

module.exports = category;
