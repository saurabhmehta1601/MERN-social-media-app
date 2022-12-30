import Post from "../../models/Post.js";

const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export default getFeedPosts;
