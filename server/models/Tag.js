const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const SequelizeSlugify = require("sequelize-slugify");

const tag = sequelize.define("tag", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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

SequelizeSlugify.slugifyModel(tag, {
  source: ["title"],
  lower: true
});

module.exports = tag;
