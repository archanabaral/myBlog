const express = require("express");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const sequelize = require("./config/db");
const User = require("./models/User");

const users = require("./routes/user.routes");

const app = express();
app.use(express.json());

//Mount Routes
app.use("/api/users", users);

sequelize
  .sync()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server starting on PORT ${PORT}`);
});
