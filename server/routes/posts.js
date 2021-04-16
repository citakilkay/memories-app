import express from 'express';
import {getAllPosts, createPost} from '../controllers/posts.js';
//import formidable from "formidable";
import connectMultiparty from "connect-multiparty";
//import multiparty from "multiparty";
//import busboy from "connect-busboy";
const router = new express.Router();
const multipartMiddleware = connectMultiparty();

router.get('/', getAllPosts);
router.post('/addpost',/*busboy(),*/ createPost, multipartMiddleware);

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