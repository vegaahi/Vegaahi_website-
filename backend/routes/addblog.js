const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const Blog = require("../model/addblog");

// Define the image upload directory
const uploadDir = path.resolve(__dirname, "../../vega/public/images/");


// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (_, __, cb) => cb(null, uploadDir),
    filename: (_, file, cb) => cb(null, `${Date.now()}${path.extname(file.originalname)}`)
});
const upload = multer({ storage });

// Helper function for error handling
const handleError = (res, error) => res.status(500).json({ message: "Server error", error: error.message });

// Route to add a new blog
router.post("/addblog", upload.single("image"), async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content || !req.file) return res.status(400).json({ message: "All fields are required" });

        const newBlog = await Blog.create({ 
            title, 
            content, 
            image: `/images/${req.file.filename}` 
        });

        res.status(201).json({ message: "Blog added successfully", data: newBlog });
    } catch (error) { handleError(res, error); }
});

// Route to get all blogs
router.get("/getallblogs", async (_, res) => {
    try { res.status(200).json({ message: "All Blogs", data: await Blog.find().lean() }); }
    catch (error) { handleError(res, error); }
});

// Route to get a single blog by ID
router.get("/getblog/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).lean();
        blog ? res.status(200).json({ message: "Blog found", data: blog }) : res.status(404).json({ message: "Blog not found" });
    } catch (error) { handleError(res, error); }
});

// Route to update a blog
router.put("/updateblog/:id", upload.single("image"), async (req, res) => {
    try {
        const { title, content } = req.body, updates = { title, content };

        if (req.file) {
            const blog = await Blog.findById(req.params.id);
            if (blog?.image) {
                const oldImagePath = path.join(uploadDir, path.basename(blog.image));
                if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
            }
            updates.image = `/images/${req.file.filename}`;
        }

        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updates, { new: true }).lean();
        updatedBlog ? res.status(200).json({ message: "Blog updated successfully", data: updatedBlog }) : res.status(404).json({ message: "Blog not found" });
    } catch (error) { handleError(res, error); }
});

// Route to delete a blog
router.delete("/deleteblog/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        if (blog.image) {
            const imagePath = path.join(uploadDir, path.basename(blog.image));
            if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
        }

        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) { handleError(res, error); }
});

// Serve uploaded images statically
router.use("/images", express.static(uploadDir));

module.exports = router;
