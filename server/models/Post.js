const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const SequelizeSlugify = require("sequelize-slugify");

const Post = sequelize.define("post", {
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
  summary: {
    type: Sequelize.TEXT("tiny"),
  },
  
  

  published: Sequelize.BOOLEAN,

  publishedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  content: Sequelize.TEXT,
});

SequelizeSlugify.slugifyModel(Post, {
  source: ["title"],
});

module.exports = Post;
