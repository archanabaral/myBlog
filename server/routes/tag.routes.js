const express = require("express");
const router = express.Router();
const {
  getTag,
  createTag,
  updateTag,
  deleteTag,
} = require("../controllers/tag.controller");

router.route("/").get(getTag).post(createTag);
router.route("/:id").put(updateTag).delete(deleteTag);

module.exports = router;
