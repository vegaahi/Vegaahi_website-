const mongoose = require('mongoose');

const salaryDetailsSchema = new mongoose.Schema({
  basicSalary: Number,
  hra: Number,
  medicalAllowance: Number,
  pf: Number,
  specialAllowance: Number,
});

const offerLetterSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  employeeName: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  designation: { type: String, default: "Software Engineer (Internship)" },
  joiningDate: { type: Date, required: true },
  location: { type: String, default: "Warangal" },
  salaryDetails: salaryDetailsSchema,
  grossSalary: Number
}, {
  timestamps: true,
});

module.exports = mongoose.model('OfferLetter', offerLetterSchema);
