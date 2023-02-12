import Express from "express";
import { getAllLikes } from "../controllers/like.js";

const router = Express.Router();

router.get("/getAll", getAllLikes);

export default router;
