import express from 'express';
import {getAllPosts, createPost} from '../controllers/posts.js';

const router = new express.Router();

router.get('/', getAllPosts);
router.post('/addpost',createPost);

export default router;

/*
router.get('/:postID', async (req, res) => {
    try {
        const postbyId = await Post.findbyId({ req.params.postID }).lean();
        res.json(postbyId);
    } catch (err) {
        res.json({ message: err });
    }
})

*/