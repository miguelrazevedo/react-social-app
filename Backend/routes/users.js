import Express from "express";
import { getAllUsers } from "../controllers/user.js";

const router = Express.Router();

router.get("/getAll", getAllUsers);
export default router;
