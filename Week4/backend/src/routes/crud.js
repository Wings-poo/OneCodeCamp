const express = require("express");
const router = express.Router();

const Post = require("../controller/crud");

router.get("/", Post.findAll);
router.get('/:id', Post.findOne);
router.post("/", Post.create);
router.patch("/:id", Post.update);
router.delete("/:id", Post.destroy);

module.exports = router;