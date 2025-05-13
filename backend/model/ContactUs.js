const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactUs", ContactUsSchema);