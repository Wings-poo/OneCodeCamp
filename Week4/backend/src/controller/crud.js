const Post = require("../models/post");

// Create Post
exports.create = async (req, res) => {
    const { title, author, description, likes, comments } = req.body; // this will make it into json format?

    try {
        const post =  await Post.create({
            title,
            author,
            description,
            likes,
            comments
        });
        res.status(200).json(post); // green status
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve Post
// All
exports.findAll = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};
// One
exports.findOne = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(402).json({ error: error.message });
    }
};

// Update post
exports.update = async (req, res) => {
    if (!req.body) {
        res.status(403).send({ error: "Data to update cannot be empty!" });
    }

    const id = req.params.id;

    await Post.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
            .then ((data) => {
                if (!data) {
                    res.status(403).send({ error: "Post not found." });
                } else {
                    res.send({ message: "Post updated successfully." });
                }
            })
            .catch ((error) => {
                res.status(403).send({ error: error.message });
            })
};

// Delete post
exports.destroy = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
            .then ((data) => {
                if (!data) {
                    res.status(404).send({ error: "Post not found." });
                } else {
                    res.send({ message: "Post deleted successfully." });
                }
            })
            .catch ((error) => {
                res.status(404).send({ error: error.message });
            })
};