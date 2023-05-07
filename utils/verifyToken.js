const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"].split(" ")[1];
  req.user = {};
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res.json({
          isLoggingIn: false,
          message: "Failed to Authenticate",
          err: err,
        });
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    });
  } else {
    res.status(406).json({ message: "Token Not Acceptable" });
  }
};

module.exports = verifyToken;
