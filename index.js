import express from "express";
import mongoose from "mongoose";
import Post from "./models/post.js";
import bodyParser from "body-parser";

main()
    .then(() => {
        console.log("Database Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BlogAPI');
}

const app = express();
const port = 4000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//GET all posts
app.get("/posts", async (req, res) => {
  let posts = await Post.find();
  //console.log(posts);
  res.json(posts);
});

//POST a new post
app.post("/posts", async (req, res) => {
  let newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    created_at: new Date(),
  });
  await newPost.save()
  res.status(201).json(newPost);
});

//GET a specific post by id - For displaying existing Post data while editing.
app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  //console.log(post);
  res.json(post);
});

//PATCH a post when you just want to update one parameter
app.patch("/posts/:id", async (req, res) => {
  let post = await Post.findByIdAndUpdate(req.params.id,
    { 
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    },
    {runValidators: true, new: true});
  res.json(post);
});

//DELETE a specific post by providing the post id
app.delete("/posts/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});