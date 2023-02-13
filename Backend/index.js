import dotenv from "dotenv";
dotenv.config();
import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Express config
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import likeRoutes from "./routes/likes.js";
import commentRoutes from "./routes/comments.js";

const app = Express();
const PORT = process.env.PORT || 8800;

// Middleware
app.use(Express.json());
app.use(cors());
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);

app.listen(PORT, () => console.log("Listening on port " + PORT));
