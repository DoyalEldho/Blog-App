import express from "express";
import { savePosts } from "../controller/postController.js";


const router =express.Router();

router.post('/api/posts',savePosts);


export default router;