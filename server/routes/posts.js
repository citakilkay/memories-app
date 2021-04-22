import express from 'express';
import {getAllPosts, createPost, getPostbyId} from '../controllers/posts.js';
import connectMultiparty from "connect-multiparty";
const router = new express.Router();
const multipartMiddleware = connectMultiparty();

router.get('/', getAllPosts);
router.post('/addpost', createPost, multipartMiddleware);
router.get('/:id', getPostbyId);
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