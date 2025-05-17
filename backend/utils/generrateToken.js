import jwt from "jsonwebtoken";
import { ENV_VATS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VATS.JWT_SECRET, { expiresIn: "15d" });

  res.cookie("jwt-netflix", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent XSS attacks cross-site scripting attacks, make it not accessible to javascript
    sameSite: "strict", // CSRF attacks cross-site request forgery, prevent from other sites to access the cookie
    secure: ENV_VATS.NODE_ENV !== "development", //prevent from http to access the cookie in development mode
  });

  return token;
};
