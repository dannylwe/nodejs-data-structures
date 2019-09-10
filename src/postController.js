import Posts from "./database/posts";
import moment from "moment";

class postController {
  static getPosts(req, res) {
    if(Posts.length < 1) {
      return res.status(200).json({
        message: "no posts currently"
      });
    } else {
      return res.status(200).json({
        message: "List of all Posts",
        posts: Posts
      });
    }
  }
  static createPost(req, res) {
    const newId = parseInt(Posts.length) + 1;
    const { title, body } = req.body;
    const newPost = {
      id: newId,
      title,
      body,
      created_at: moment.utc().format()
    };
    Posts.push(newPost);
    return res.status(201).json({
      message: "Created new Post",
      newPost
    });
  }
  static getOnePost(req, res) {
    const { id } = req.params;
    const getPostById = Posts.find(onePost => {
      onePost.id === id;
    });
    if (getPostById) {
      return res.status(200).json({
        message: "found post with Id",
        postById: getPostById
      });
    } else {
      res.status(400).json({
        error: "could not find post with that Id"
      });
    }
  }
  static updatePost(req, res) {
    const { id } = req.params;
    const updatePost = Posts.find(postToUpdate => {
      postToUpdate.id === id;
    });
    if (updatePost) {
      updatePost.title == req.body.title, updatePost.body === req.body.title;
    }
    return res.status(201).json({
      message: "post updated",
      updatePost
    });
  }
  static deletePost(req, res) {
    const { id } = req.params;
    const postToDelete = Posts.find(postFound => postFound.id === id);
    if (postToDelete) {
      const newPosts = Posts.filter(filteredList => {
        return filteredList != postToDelete;
      });
      res.status(200).json({
        message: "post successfully deleted",
        deletedPost: postToDelete
      });
    } else {
      res.status(400).json({
        error: "could not delete. Could not find that post"
      });
    }
  }
}

export default postController;
