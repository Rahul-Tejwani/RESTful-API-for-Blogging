import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
    },
});

const Post = mongoose.model("Post", postSchema);
export default Post;