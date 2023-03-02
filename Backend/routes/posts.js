import Express from "express";
import { getPosts, createPost } from "../controllers/post.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Express.Router();

router.get("/", verifyToken, getPosts);
router.post("/", verifyToken, createPost);

export default router;
