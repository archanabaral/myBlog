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
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  mobile: Sequelize.TEXT,
  password: Sequelize.STRING,
  intro: Sequelize.TEXT("tiny"),
  profile: Sequelize.TEXT,
  registeredAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  lastLogin: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
});

module.exports = User;
