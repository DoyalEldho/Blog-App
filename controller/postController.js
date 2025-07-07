import PostModel from "../model/PostModel.js";

export const savePosts = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const newPost = new PostModel({ title, content, tags });
    await newPost.save();
    res.status(201).json({ message: "Post saved", data: newPost });
  } catch (error) {
    res.status(500).json({ error: "Saving failed", details: error.message });
  }
};