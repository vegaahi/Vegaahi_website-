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
app.use(express.static(path.join(__dirname,'./build')));
app.use(cors({
  origin: "*", // Change this to match your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // Allows cookies and authentication headers
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL, {})
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log(error));

  
  app.use('/', contactRoutes);
  app.use("/auth", authRoutes);
  app.use("/protected", protectedRoutes);
  app.use("/users", addUserRoutes);
  app.use("/blog", blogRoutes);
  app.use("/images", express.static("src/images"));


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
