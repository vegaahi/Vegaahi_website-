const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Employee = require("../model/employeeSchema");

const router = express.Router();

// Employee Login
router.post("/login", async (req, res) => {
  try {
    let { email, role, password } = req.body;

    // Validate the input fields
    if (!email || !role || !password) {
      return res.status(400).json({ message: "Email, role, and password are required!" });
    }

    // Convert role to lowercase for case-insensitive comparison
    role = role.toLowerCase();

    // Find employee by email
    const employee = await Employee.findOne({ email });
    if (!employee) return res.status(400).json({ message: "Invalid email!" });

    // Compare role (case-insensitive)
    if (employee.role.toLowerCase() !== role) {
      return res.status(400).json({ message: "Role does not match!" });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password!" });

    // Generate JWT token
    const token = jwt.sign(
      { id: employee._id, role: employee.role, email: employee.email, name: employee.name },
      process.env.JWT_SECRET,  // Store your JWT secret in the environment variables
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Send response with token and employee info
    res.json({
      token,
      role: employee.role,
      email: employee.email,
      name: employee.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
