import { useState, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import api from "../../api";

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  },
};

// checking

const AddBlog = () => {
  const [blog, setBlog] = useState({ title: "", content: "", imageFile: null });
  const [editorKey, setEditorKey] = useState(0); // Reset ReactQuill editor
  const fileInputRef = useRef(null); // Reference to file input

  const validateForm = () => {
    if (!blog.title.trim()) {
      Swal.fire({ icon: "error", title: "Validation Error", text: "Title is required!" });
      return false;
    }
    if (!blog.content.trim() || blog.content === "<p><br></p>") {
      Swal.fire({ icon: "error", title: "Validation Error", text: "Content cannot be empty!" });
      return false;
    }
    if (!blog.imageFile) {
      Swal.fire({ icon: "error", title: "Validation Error", text: "Please upload an image!" });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleContentChange = (value) => {
    setBlog({ ...blog, content: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlog({ ...blog, imageFile: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("content", blog.content);
    formData.append("image", blog.imageFile);

    try {
      await api.post("/blog/addblog", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      Swal.fire({ icon: "success", title: "Success!", text: "Blog added successfully!" });

      // Reset form fields
      setBlog({ title: "", content: "", imageFile: null });
      setEditorKey(prevKey => prevKey + 1); // Reset ReactQuill editor
      if (fileInputRef.current) fileInputRef.current.value = ""; // Clear file input

    } catch (error) {
      Swal.fire({ icon: "error", title: "Oops!", text: "Failed to add blog. Please try again." });
    }
  };

  return (
    <Container className="p-4 shadow-lg rounded bg-light my-3">
      <h2 className="mb-4 text-center text-primary">Add New Blog</h2>
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter blog title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Content</Form.Label>
          <ReactQuill
            key={editorKey} // Ensures re-render on reset
            value={blog.content}
            onChange={handleContentChange}
            modules={modules}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Upload Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 fw-bold">
          Submit Blog
        </Button>
      </Form>
    </Container>
  );
};

export default AddBlog;
