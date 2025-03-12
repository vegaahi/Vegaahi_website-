const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, 
    required: true,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
