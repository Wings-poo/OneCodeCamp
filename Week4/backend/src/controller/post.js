const Post = require("../models/post");

// Create Post
const createPost = async (req, res) => {
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

module.exports = createPost;