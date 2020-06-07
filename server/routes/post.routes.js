const express = require("express");
const router = express.Router();
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");


//router.route("/").post(createPost);
router.route("/:id").put(updatePost).delete(deletePost)
router.route("/posts").get(getPost).post(createPost)

module.exports = router;
