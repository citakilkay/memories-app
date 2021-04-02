import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    followers: {type: [String], default: []},
    following: {type: [String], default: []},
    createdPosts: {type: [String], default: []}
});

export default mongoose.model('User', PostSchema);