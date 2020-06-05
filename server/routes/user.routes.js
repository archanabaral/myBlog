const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { getUsers, createUser } = require("../controllers/user.controller");

router.route("/").get(getUsers).post(createUser);

module.exports = router;
