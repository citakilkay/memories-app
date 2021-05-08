import User from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).lean();
        res.json(users);
    } catch (err) {
        res.json({ message: err.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const newUser = await new User(req.body);
        newUser.save().then(newUser => res.json(newUser));
        
    } catch (err) {
        res.json({message: err.message});
    }
}

export const getUserByName = async (req, res) => {
    try {
        console.log(req.params.username);
        const postbyId = await User.findOne({"username" : req.params.username}).lean();
        console.log(postbyId);
        res.json(postbyId);
    } catch (err) {
        res.json({ message: err });
    }
}