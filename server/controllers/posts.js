import Post from "../models/Post.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).lean();
        res.json(posts);
    } catch (err) {
        res.json({message: err.message});
    }
}

export const createPost = async (req, res) => {
    try{
        const post = await new Post(req.body);
        newPost.save().then(newPost => res.json(newPost));
    } catch (err) {
        res.json({message: err.message});
    }
}

export const getPostbyId = (req, res) => {
    try {
        res.send("getPostbyId function");
        //const posts = Post.findbyId({}).lean();
        //res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
}