// models/IncrementLetter.js
const mongoose = require("mongoose");

const IncrementLetterSchema = new mongoose.Schema(
  {
    employeeId: { type: String, required: true }, // Reference by employeeId, not ObjectId
    percentage: { type: Number, required: true },
    previousSalary: { type: Number, required: true },
    newSalary: { type: Number, required: true },
    remarks: { type: String },
    generatedDate: { type: Date, default: Date.now },
    effectiveFromDate: Date
  },
  { timestamps: true }
);

const IncrementLetter = mongoose.model("IncrementLetter", IncrementLetterSchema);
module.exports = IncrementLetter;
