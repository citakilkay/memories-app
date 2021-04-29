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
    const { title, body, tags } = req.body;
    const tagsArray = tags.split(" ");
    const creator = "generalkenobi";
    const { postImg } = req.files;
    const post = new Post({ title, creator, body, tags: tagsArray, postImg: `/uploads/post-images/${postImg.name}` });
    try{  
        //Post.create(req.body);
        postImg.mv("../uploads/post-images/" + postImg.name);
        await post.save();
        console.log(post);
        res.redirect("/posts");
    } catch (err) {
        res.json({message: err.message});
    }
}

export const getPostbyId = async (req, res) => {
    try {
        console.log(req.params.id);
        Post.findById(req.params.id).lean().then(post => res.json(post));
    } catch (err) {
        res.json({ message: err.message });
    }
}