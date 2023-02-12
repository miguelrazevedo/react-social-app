import { db } from "../databaseConnection.js";
import bcrypt from "bcrypt";
/*
    - Create users
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
        "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)",
        [username, email, hashedPassword, name],
        (err, data) => {
          if (err) {
            return res.status(500).json(err);
          }

          // If the user is sucessefuly created
          return res.status(200).json("User has been created sucessfully");
        }
      );
    }
  );
};

/*
    POST
    Login user
 */
export const login = (req, res) => {};

/*
    POST
    Logout user
 */
export const logout = (req, res) => {};
