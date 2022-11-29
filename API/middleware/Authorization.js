const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("./../models/User");
const Book = require("./../models/Book");

dotenv.config();

const key = process.env.SECRET_KEY;

/**
 * @description - Checks if logged in user has valid AUTH token
 *
 * @param  {Object} req - request
 *
 * @param  {object} res - response
 *
 * @param {Object} next - Call back function
 *
 * @return {null} - null
 */

exports.isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers["x-access-token"];

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, key, (error, user) => {
      if (error) {
        res.status(401).json({
          message: "Failed to Authenticate Token",
          error,
        });
      } else {
        req.body.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "Access denied, Authentication token does not exist",
    });
  }
};
