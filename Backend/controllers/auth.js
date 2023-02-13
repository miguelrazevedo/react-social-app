import { db } from "../databaseConnection.js";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
/*
    - Create user
    POST /api/auth/register
    body:
        username,
        name
        email,
        password,
 */
export const register = async (req, res) => {
  // Check if user exists, create otherwise
  const { username, name, email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      // It means there's already a user
      if (data.length > 0) {
        return res.status(409).json({ message: "User already exists" });
      }

      // Hash user's password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      db.query(
        "INSERT INTO users (username, email, password, name) VALUES (?, ?, ?, ?)",
        [username, email, hashedPassword, name],
        (err, data) => {
          if (err) {
            return res.status(500).json(err);
          }

          // If the user is sucessefuly created
          return res
            .status(200)
            .json({ message: "User has been created sucessfully" });
        }
      );
    }
  );
};

/*
    - Login user
    POST /api/auth/login
    body:
        username,
        password
 */
export const login = async (req, res) => {
  const { username } = req.body;

  // Check if the user exists
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      // If there isn't any user, send an error response
      if (data.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      // True if passwords are the same
      const checkPassword = await bcrypt.compare(
        req.body.password,
        data[0].password
      );

      if (!checkPassword) {
        return res.status(400).json({ message: "Wrong password or username" });
      }

      // Generate JWT
      const jwtSecret = process.env.JWT_SECRET;
      const token = jwt.sign({ id: data[0].id }, jwtSecret);

      // Separate password from the rest of the userObject
      // Set JWT as a cookie with name "accessToken"
      const { password, ...userObject } = data[0];
      res
        .cookie("accessToken", token, {
          httpOnly: true,
        })
        .status(200)
        .json(userObject);
    }
  );
};

/*
    - Logout user
    POST /api/auth/logout
 */
export const logout = (req, res) => {
  // Clear the cookie that contains the JWT
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json({ message: "User has been logged out" });
};
