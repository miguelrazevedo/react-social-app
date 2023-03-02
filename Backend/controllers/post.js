import moment from "moment/moment.js";
import { db } from "../databaseConnection.js";

/*
    - Get timeline posts
    GET /api/posts/
 */
export const getPosts = (req, res) => {
  /**
   * `SELECT posts.*, users.id AS user_id, name, profilePicture FROM posts 
    JOIN users ON users.id = posts.userId 
    JOIN relationships ON relationships.followedUserId = users.id AND relationships.followerUserId = ?
    ORDER BY posts.createdAt DESC`
   */
  db.query(
    `SELECT posts.*, users.id AS user_id, name, profilePicture FROM posts 
  JOIN users ON users.id = posts.userId 
  JOIN relationships ON relationships.followedUserId = users.id AND relationships.followerUserId = ? OR posts.userId = ?
  ORDER BY posts.createdAt DESC`,
    [req.userId, req.userId],
    (err, data) => {
      if (err) {
        console.log(err);
      }
      return res.status(200).json(data);
    }
  );
};

/*
    - Create a post
    POST /api/posts/
    body:
    - description
    - img (optional)
 */
export const createPost = (req, res) => {
  const values = [
    req.body.description,
    req.body.img,
    req.userId,
    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"), // SQL Timestamp
  ];
  db.query(
    `INSERT INTO posts (description, image, userId, createdAt) VALUES (?, ?, ?, ?)`,
    values,
    (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json({ message: "Post has been created" });
    }
  );
};
