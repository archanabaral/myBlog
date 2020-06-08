const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");
const auth = require("../middleware/auth")

router.route("/").post(auth , createPost).get(auth, getPost);
router.route("/:id").put(updatePost).delete(deletePost);

module.exports = router;
