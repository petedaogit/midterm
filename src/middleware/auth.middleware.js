import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../utils/key.js";

const authorizationToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(403).json({ message: "Missing bearer token!" });
    }

    const token = authHeader.split("Bearer ")[1];
    if (!token) {
      return res.status(403).json({ message: "Invalid Bearer token format" });
    }

    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default authorizationToken;
