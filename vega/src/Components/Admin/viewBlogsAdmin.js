import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Spinner, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import api from "../../api";

const ViewBlogsAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [updatedBlog, setUpdatedBlog] = useState({ title: "", content: "", image: "" });
  const [imageFile, setImageFile] = useState(null);

  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await api.get("/blog/getallblogs");
      setBlogs(response.data.data);
    } catch (error) {
      console.error("API Error:", error);
      Swal.fire({ icon: "error", title: "Oops!", text: "Failed to fetch blogs." });
    } finally {
      setLoading(false);
    }
  };

  const removePTags = (content) => content.replace(/<\/?p>/g, '');

  const handleShow = (blog, mode) => {
    setSelectedBlog(blog);
    setEditMode(mode === "edit");
    const contentWithoutPTags = removePTags(blog.content);
    setUpdatedBlog({ title: blog.title, content: contentWithoutPTags, image: blog.image });
    setShow(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("title", updatedBlog.title);
      formData.append("content", removePTags(updatedBlog.content));
      if (imageFile) formData.append("image", imageFile); 

      await api.put(`/blog/updateblog/${selectedBlog._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      Swal.fire("Updated!", "Blog updated successfully.", "success");
      fetchBlogs();
      setShow(false);
    } catch (error) {
      Swal.fire("Error!", "Failed to update blog.", "error");
    }
  };

  const handleDelete = async (blogId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await api.delete(`/blog/deleteblog/${blogId}`);
        Swal.fire("Deleted!", "Blog has been deleted.", "success");
        fetchBlogs();
      } catch (error) {
        Swal.fire("Error!", "Failed to delete blog.", "error");
      }
    }
  };

  return (
    <Container className="p-4">
      <h2 className="text-center text-primary mb-4">All Blogs</h2>
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : blogs.length === 0 ? (
        <p className="text-center text-muted">No blogs available.</p>
      ) : (
        <Row className="g-4">
          {blogs.map((blog) => (
            <Col key={blog._id} md={6} lg={4}>
              <div className="p-3 border rounded shadow-sm bg-light">
                {blog.image && (
                  <div className="text-center mb-2">
                    <img
                      src={
                        blog.image.startsWith("http")
                          ? blog.image
                          : `${BASE_URL}/uploads/${blog.image}`
                      }
                      alt={blog.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  </div>
                )}
                <h5 className="fw-bold text-dark">{blog.title}</h5>
                <p className="text-muted" style={{ maxHeight: "4.5em", overflow: "hidden" }}>
                  <span dangerouslySetInnerHTML={{ __html: blog.content.length > 100 ? blog.content.slice(0, 100) + "..." : blog.content }} />
                </p>
                <Button variant="primary" className="fw-bold me-2" onClick={() => handleShow(blog, "view")}>
                  Read More
                </Button>
                <Button variant="warning" className="fw-bold me-2" onClick={() => handleShow(blog, "edit")}>
                  Edit
                </Button>
                <Button variant="danger" className="fw-bold" onClick={() => handleDelete(blog._id)}>
                  Delete
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      )}

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit Blog" : selectedBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editMode ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={updatedBlog.title}
                  onChange={(e) => setUpdatedBlog({ ...updatedBlog, title: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={updatedBlog.content}
                  onChange={(e) => setUpdatedBlog({ ...updatedBlog, content: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                {updatedBlog.image && (
                  <div className="mb-2">
                    <img
                      src={
                        updatedBlog.image.startsWith("http")
                          ? updatedBlog.image
                          : `${BASE_URL}/uploads/${updatedBlog.image}`
                      }
                      alt="Current Blog"
                      className="img-fluid rounded mb-2"
                      style={{ maxHeight: "150px", objectFit: "cover" }}
                    />
                  </div>
                )}
                <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
              </Form.Group>
            </Form>
          ) : (
            <p className="text-dark">
              <span dangerouslySetInnerHTML={{ __html: selectedBlog?.content }} />
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {editMode && (
            <Button variant="success" onClick={handleUpdate}>
              Save Changes
            </Button>
          )}
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ViewBlogsAdmin;
