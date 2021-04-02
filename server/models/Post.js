import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    creator: { type: String, required: true},
    body: { type: String, required: true },
    likes: { type: [String], default: []},
    tags: {type: [String], required: true},
    comments: {type:[String], default: []},
    selectedFile: {type: String},
    createdAt: {type: Date, default: new Date}
});

export default mongoose.model('Post', PostSchema);