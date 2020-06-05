const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: Sequelize.STRING,
  mobile: Sequelize.INTEGER,
  password: Sequelize.STRING,
  intro: Sequelize.TEXT("tiny"),
  profile: Sequelize.TEXT,
  registeredAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  lastLogin: Sequelize.DATE,
});

module.exports = User;
