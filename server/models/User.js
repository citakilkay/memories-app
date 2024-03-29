import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {type: String/* required: true,unique: true*/},
    email: { type: String /*required: true, unique: true */},
    password: {type: String, required: true},
    followers: {type: [String], default: []},
    following: {type: [String], default: []},
    createdPosts: {type: [String], default: []},
    UserImg: {type: String}
}, { collection: 'users' });

export default mongoose.model('User', UserSchema);