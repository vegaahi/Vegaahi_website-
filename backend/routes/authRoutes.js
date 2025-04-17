const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Employee = require("../model/employeeSchema");

const router = express.Router();

//login route
router.post("/login", async (req, res) => {
  try {
    let { email, role, password } = req.body;

    if (!email || !role || !password) {
      return res.status(400).json({ message: "Email, role, and password are required!" });
    }

    role = role.toLowerCase();

    const employee = await Employee.findOne({ email });
    if (!employee) return res.status(400).json({ message: "Invalid email!" });

    if (employee.role.toLowerCase() !== role) {
      return res.status(400).json({ message: "Role does not match!" });
    }

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password!" });

    const token = jwt.sign(
      { id: employee._id, role: employee.role, email: employee.email, name: employee.name, department: employee.department },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );


    // ✅ Set the cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only true in production with HTTPS
      sameSite: "Lax", // You can also use 'Strict'
      // maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      maxAge: 15 * 60 * 1000 
    });

    // ✅ Return user info (without token)
    res.status(200).json({
      message: "Login successful",
      role: employee.role,
      email: employee.email,
      name: employee.name,
      department: employee.department
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});



// Logout route
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});

// ✅ ADD THIS ROUTE BELOW LOGIN
router.get("/verify", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json(decoded);
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
});

module.exports = router;
