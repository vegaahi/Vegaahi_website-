const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

const router = express.Router();

// User Login
router.post("/login", async (req, res) => {
    try {
      let { email, password, role } = req.body;
  
      if (!email || !password || !role) {
        return res.status(400).json({ message: "All fields are required!" });
      }
  
      // Convert role to lowercase for comparison
      role = role.toLowerCase();
  
      // Find user by email only
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid email!" });
  
      // Compare role (case-insensitive)
      if (user.role.toLowerCase() !== role) {
        return res.status(400).json({ message: "Role does not match!" });
      }
  
      // Compare password with hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid password!" });
  
      // Generate token
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.json({ token, role: user.role });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
  

module.exports = router;
