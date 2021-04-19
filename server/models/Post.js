import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    creator: { type: String},
    body: { type: String, required: true },
    tags: { type: Array, required: true },
    postImg: {type: String},
    likes: { type: [String], default: [] },
    comments: { type: [String], default: []},
    createdAt: {type: Date, default: new Date}
}, { collection: 'posts' });

export default mongoose.model('Post', PostSchema);