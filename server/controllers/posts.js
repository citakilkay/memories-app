import express from "express";
import Post from "../models/Post.js";
import { uploadFile, downloadFile } from "../s3.js";

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
    
    const { title, body, tags } = req.body;
    const tagsArray = tags.split(" ");
    const creator = "generalkenobi";
    const { postImg } = req.files;
    const post = new Post({ title, creator, body, tags: tagsArray, postImg: `${postImg.name}` });
    try{  
        uploadFile(postImg);
        await post.save();
        res.json(post);
        //res.redirect("/posts");
    } catch (err) {
        res.json({message: err.message});
    }
}

export const getPostbyId = async (req, res) => {
    try {
        Post.findById(req.params.id).lean().then(post => res.json(post));
    } catch (err) {
        res.json({ message: err.message });
    }
}

export const getImageByKey = async (req, res) => {
    const key = await req.params.key;
    const readStream = await downloadFile(key);
    readStream.pipe(res);
}
