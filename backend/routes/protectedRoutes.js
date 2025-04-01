const express = require("express");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

// Example route that can be accessed by users with the role 'Manager' or 'HR'
router.get("/manager-hr-data", verifyToken, authorizeRoles(["Manager", "HR"]), (req, res) => {
  res.json({ message: "Managers and HR can access this data!" });
});

// Example route that can only be accessed by 'MD' or 'Board of Directors'
router.get("/board-data", verifyToken, authorizeRoles(["MD", "Board of Directors"]), (req, res) => {
  res.json({ message: "MD and Board of Directors can access this data!" });
});

// Example route that can be accessed by all employees ('Manager', 'HR', 'Employee', 'Intern')
router.get("/employee-dashboard", verifyToken, authorizeRoles(["Manager", "HR", "Employee", "Intern"]), (req, res) => {
  res.json({ message: "All employees can access this dashboard!" });
});

// Example route that can be accessed only by 'Employee' or 'Intern'
router.get("/employee-data", verifyToken, authorizeRoles(["Employee", "Intern"]), (req, res) => {
  res.json({ message: "Employee and Intern can access this data!" });
});

// Example route to view personal details (accessible by the user themselves only)
router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "You are viewing your profile",
    user: req.user, // User data from the verified token
  });
});

// Example route for Admin to manage employee data
router.get("/admin/manage-employees", verifyToken, authorizeRoles(["Admin"]), (req, res) => {
  res.json({ message: "Admin can manage employee data!" });
});

module.exports = router;
