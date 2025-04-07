const express = require("express");
const Employee = require("../model/employeeSchema");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// Helper function to remove the password from the employee object
const removePassword = (employee) => {
  const employeeObj = employee.toObject();
  delete employeeObj.password; // Remove password field before sending response
  return employeeObj;
};

// Create a new employee
router.post("/add", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(removePassword(savedEmployee)); // Exclude password from response
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
});

// Get all employees
router.get("/getall",verifyToken, async (req, res) => {
  try {
    const employees = await Employee.find();
    const employeesWithoutPassword = employees.map(removePassword); // Exclude passwords
    res.status(200).json(employeesWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get employee by email
router.get("/getbyemail/:email",verifyToken,  async (req, res) => {
  try {
    const employee = await Employee.findOne({ email: req.params.email });
    await console.log(employee);
    if (!employee) return res.status(404).json({ message: "Employee not found" });
   
    res.status(200).json(removePassword(employee)); // Exclude password from response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get employee by ID
router.get("/getby/:id",  async (req, res) => {
  try {
    const employee = await Employee.findOne({ employeeId: req.params.id });
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(removePassword(employee)); // Exclude password from response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update employee by ID
router.put("/updateby/:id",verifyToken, async (req, res) => {
  try {
    const updatedEmployee = await Employee.findOneAndUpdate({employeeId: req.params.id}, req.body, { new: true, runValidators: true });
  
    if (!updatedEmployee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(removePassword(updatedEmployee)); // Exclude password from response
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete employee by ID
router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const deletedEmployee = await Employee.findOneAndDelete({ 
      employeeId: req.params.id });

    if (!deletedEmployee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
