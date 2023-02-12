import Express from "express";
import { getAllPosts } from "../controllers/post.js";

const router = Express.Router();

router.get("/getAll", getAllPosts);

export default router;
