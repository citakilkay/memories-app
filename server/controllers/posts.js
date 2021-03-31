export const getAllPosts = (req, res, next) => {

    try {
        //const posts = await Post.find({}).lean();
        //res.json(posts)
        res.send("This is getAllPosts Callback");
        next();
    } catch (err) {
        console.log("Error: " + err);
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