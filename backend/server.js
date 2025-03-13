const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const contactRoutes = require('./routes/ContactusRoutes');
const addUserRoutes = require('./routes/adduser');
const blogRoutes = require("./routes/addblog");
const multer = require("multer");
const path = require('path'); 

dotenv.config();

app.use(express.json());

// Enable CORS (Make sure the frontend domain is correct)
app.use(cors({
  origin: ["http://localhost:3000"], // Change * to specific domains if deploying
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ API Routes should come before serving React build
app.use('/contact', contactRoutes);
app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);
app.use("/users", addUserRoutes);
app.use("/blog", blogRoutes);
app.use("/images", express.static("src/images"));

// ✅ Serve React static files AFTER API routes
app.use(express.static(path.join(__dirname, "../vega/build")));

// ✅ React Wildcard Route (MUST be after API routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../vega/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL, {})
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
