import express from "express";
import Post from "../models/Post.js";
//import busboy from "connect-busboy";

const app = express();
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).lean();
        res.json(posts);
    } catch (err) {
        res.json({message: err.message});
    }
}
//app.use(busboy());
export const createPost = async (req, res) => {
    console.log(req.files);
    const { title,creator, body,tags, postImg } = req.body;
    const post = new Post({ title, creator, body, tags, postImg});
    try{
        //Post.create(req.body);
        await post.save();
        res.redirect("/");
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
        res.json({ message: err.message });
    }
}