const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path"); 
const multer = require("multer");
const cookieParser = require("cookie-parser");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const contactRoutes = require("./routes/ContactusRoutes");
const addUserRoutes = require("./routes/adduser");
const blogRoutes = require("./routes/addblog");
const employeeRoutes = require("./routes/addEmployeeRoutes");
const offerRoutes = require("./routes/OffterLetterRoutes");

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"], // Adjust for production
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(cookieParser());

// ✅ Serve Static Files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));  // Ensure uploads are accessible
app.use("/images", express.static(path.join(__dirname, "src/images")));  // Serving static images


// ✅ API Routes (Before Serving React)
app.use('/contact', contactRoutes);
app.use("/auth", authRoutes); 
app.use("/protected", protectedRoutes);
app.use("/users", addUserRoutes);
app.use("/blog", blogRoutes);
app.use("/employee", employeeRoutes);
app.use("/employee/blog", blogRoutes);
app.use('/offerletters', offerRoutes);
 



// ✅ Serve React Build (After API Routes)
app.use(express.static(path.join(__dirname, "../vega/build")));

// ✅ React Wildcard Route (Handles SPA Routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../vega/build", "index.html"));
});

// ✅ Database Connection
const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>{ console.log("✅ Database connected...")
    require("./cronJobs/hiringNotification");
  })
  .catch((error) => console.log("❌ Database connection error:", error));

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
