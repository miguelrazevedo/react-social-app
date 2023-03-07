import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

/**
 * Middleware to check if the user has authorization.
 * If so, will add to the Request Object, userId parameter
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Response<any, Record<string, any>> | void}
 */
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
