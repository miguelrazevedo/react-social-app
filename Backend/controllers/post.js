import { db } from "../databaseConnection.js";

/*
    - Get timeline posts
    GET /api/posts/
 */
export const getPosts = (req, res) => {
  db.query(
    `SELECT posts.*, users.id AS user_id, name, profilePicture FROM posts 
    JOIN users ON users.id = posts.userId 
    JOIN relationships ON relationships.followedUserId = users.id AND relationships.followerUserId = ?`,
    [req.userId],
    (err, data) => {
      if (err) {
        console.log(err);
      }
      return res.status(200).json(data);
    }
  );
};
