const express = require("express");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const sequelize = require("./config/db");

//requiring models
const User = require("./models/User");
const Post = require("./models/Post");
const Category = require("./models/Category");
const tag = require("./models/Tag");

//requiring routes
const users = require("./routes/user.routes");
const posts = require("./routes/post.routes");
const categories = require("./routes/category.routes");
const tags = require("./routes/tag.routes");
const auths = require("./routes/auth.routes")

const app = express();
app.use(express.json());

//Mount Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/categories", categories);
app.use("/api/tags", tags);
app.use("/api/auth", auths)

//Relationship
Post.belongsTo(User);
User.hasMany(Post);

//connect with database
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
