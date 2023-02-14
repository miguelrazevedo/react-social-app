import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: "User not logged in" });
  }

  // Verify the token, if invalid respond an error, otherwise
  // Put the user ID in the request and continue
  jwt.verify(token, process.env.JWT_SECRET, (err, dataObject) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.userId = dataObject.id;
    next();
  });
};
