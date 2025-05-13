const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const EmployeeSchema = new mongoose.Schema(
  {
    employeeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    role: {
      type: String,
      enum: ["md/boardofdirectors", "manager", "hr", "employee", "intern"], 
      required: true,
    },
      designation: { type: String, required: true }, 
    department: { type: String, required: true },
    location: {
      type: String,
      required: true,
     
      default: "Warangal",
    },
    employeeType: {
      type: String,
      required: true,
      
    },
    salary: { type: Number, required: true, min: 0 },
    dob: { type: Date, required: true },
    hireDate: { type: Date, required: true },
    experience: {
      type: String,
      required: true,

    },
    gender: { type: String, required: true,  },
    aadharNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }, // Password field added
  },
  { timestamps: true }
);

// Hash password before saving the employee
EmployeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  
  // Hash the password using bcrypt
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
