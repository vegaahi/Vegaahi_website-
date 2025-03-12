const express = require("express");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

// Only Managers & HR can access
router.get("/manager-hr-data", verifyToken, authorizeRoles(["manager", "hr"]), (req, res) => {
  res.json({ message: "Manager & HR can access this data!" });
});

// Only MD/BoardofDirectors can access
router.get("/board-data", verifyToken, authorizeRoles(["md/boardofdirectors"]), (req, res) => {
  res.json({ message: "MD/BoardofDirectors can access this data!" });
});

// All employees can access
router.get("/employee-dashboard", verifyToken, authorizeRoles(["manager", "hr", "employee", "intern"]), (req, res) => {
  res.json({ message: "All employees can access this dashboard!" });
});

module.exports = router;
