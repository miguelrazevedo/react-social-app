import dotenv from "dotenv";
dotenv.config();
import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors({ origin: "http://localhost:5173" }));
app.use(cookieParser());

// Multer Middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Social Media/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ message: req.file.filename });
});
// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);

app.listen(PORT, () => console.log("Listening on port " + PORT));
