import { response } from "express";
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
    const { title, body, postImg } = req.body;
    const post = new Post({ title, body, postImg });
    try{
        //Post.create(req.body);
        await post.save();
        console.log("post oluşturuldu");
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