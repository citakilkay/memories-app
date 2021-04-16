import express from "express";
import Post from "../models/Post.js";

const app = express();
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).lean();
        res.json(posts);
    } catch (err) {
        res.json({message: err.message});
    }
}
export const createPost = async (req, res) => {
    console.log(req.files);
    try{
        const { title, body, tags } = req.body;
        const creator  = "generalkenobi"
        const {postImg}  = req.files;
        const post = new Post({ title, creator, body, tags, postImg: `/uploads/post-images/${postImg.name}` });  
        //Post.create(req.body);
        console.log(post);
        postImg.mv("./uploads/post-images" + postImg.name);
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