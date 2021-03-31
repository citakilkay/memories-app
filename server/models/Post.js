import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    creator: { type: String, required: true},
    body: { type: String, required: true },
    likes: { type: [], required: true },
    tags: {type: [String], required: true}
});

export default mongoose.model('Post', PostSchema);