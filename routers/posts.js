const express = require('express')
const Posts = require("../schemas/posts");  //post 모델 가져오기

const router = express.Router();

router.get("/posts", async (req, res, next) => {
    try {
        const posts = await Posts.find({}).sort("-postId");
        res.json({ posts: posts });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/create', async (req, res) => {
    const { postId,postDate, postAuthor, postTitle, postContent, postPassword } = req.body;
    await Posts.create({ postId, postDate, postAuthor, postTitle, postContent, postPassword });

    res.send({ result: "success" });
});

module.exports = router;