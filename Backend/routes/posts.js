import Express from "express";
import { getPosts } from "../controllers/post.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Express.Router();

router.get("/", verifyToken, getPosts);

export default router;
