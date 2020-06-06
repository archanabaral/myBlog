const express = require("express");
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/user.controller");
const { check } = require("express-validator/check");

router
  .route("/")
  .get(getUsers)
  .post(
    [
      check("email", "Please include a valid email").isEmail(),
      check(
        "password",
        "Please enter password with 6 or more character"
      ).isLength({ min: 6 }),
    ],
    createUser
  );
  router
  .route("/:id")
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;
