import express from "express";
import postController from "../postController";

const router = express.Router();

router.get("/api/v1/posts", postController.getPosts);
router.post("/api/v1/posts", postController.createPost);
router.put("/api/v1/posts", postController.updatePost);
router.delete("/api/v1/posts", postController.deletePost);

export default router;
