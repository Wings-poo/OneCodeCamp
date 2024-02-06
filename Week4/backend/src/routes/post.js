const express = require("express");
const router = express.Router();

const createPost = require("../controller/post");

router.post("/", createPost);

module.exports = router;