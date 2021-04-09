import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    creator: { type: String},
    body: { type: String, required: true },
    likes: { type: [String], default: []},
    tags: {type: [String], required: true},
    comments: {type:[String], default: []},
    postImg: {type: String},
    createdAt: {type: Date, default: new Date}
}, { collection: 'posts' });

export default mongoose.model('Post', PostSchema);