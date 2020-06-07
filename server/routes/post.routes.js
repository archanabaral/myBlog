const express = require("express");
const router = express.Router();
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");


router.route("/").get(getPost).post(createPost);
router.route("/:id").put(updatePost).delete(deletePost);

module.exports = router;
