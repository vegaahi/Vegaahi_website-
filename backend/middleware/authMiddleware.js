const jwt = require("jsonwebtoken");

// ✅ Middleware to verify token from cookie
const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // ✅ Get token from cookie

  if (!token) return res.status(401).json({ message: "Access Denied: No Token" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach user payload to request
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid or Expired Token" });
  }
};

// ✅ Middleware to authorize based on role
const authorizeRoles = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access Forbidden: Insufficient Role" });
    }
    next();
  };
};

module.exports = { verifyToken, authorizeRoles };
