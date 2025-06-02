const express = require("express");
const router = express.Router();
const Employee = require("../model/employeeSchema");
const IncrementLetter = require("../model/IncrementLetter");

// Generate increment letter
router.post("/", async (req, res) => {
  const { employeeId, percentage, remarks,effectiveFromDate } = req.body;

  try {
    const employee = await Employee.findOne({ employeeId });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found." });
    }

    const previousSalary = employee.salary;
    const newSalary = Math.round(previousSalary + (previousSalary * percentage) / 100);

    const letter = new IncrementLetter({
      employeeId,
      percentage,
      previousSalary,
      newSalary,
      remarks,
      effectiveFromDate,
      
    });

    await letter.save();

    employee.salary = newSalary;
    await employee.save();

    res.status(201).json({ message: "Increment letter generated successfully.", letter });
  } catch (error) {
    console.error("Error generating increment letter:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all increment letters by employeeId
router.get("/:employeeId", async (req, res) => {
  try {
    const letters = await IncrementLetter.find({ employeeId: req.params.employeeId }).sort({ createdAt: -1 });
    if (!letters.length) {
      return res.status(404).json({ message: "No increment letters found for this employee." });
    }
    res.json(letters);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
