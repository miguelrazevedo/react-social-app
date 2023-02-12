import Express from "express";
import { getAllComments } from "../controllers/comment.js";

const router = Express.Router();

router.get("/getAll", getAllComments);

export default router;
