import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Spinner, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import api from "../api";

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

   // Backend Base URL from environment variables
  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

useEffect(() => {
  if (show) {
    const imgs = document.querySelectorAll(".modal-body img");
    imgs.forEach((img) => {
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      img.style.display = "block";
      img.style.margin = "10px auto";
      img.style.borderRadius = "8px";
    });
  }
}, [show]);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blog/getallblogs");
        setBlogs(response.data.data);
      } catch (error) {
        console.error(
          "API Error:",
          error.response ? error.response.data : error.message
        );
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Failed to fetch blogs. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to open modal and set selected blog
  const handleShow = (blog) => {
    setSelectedBlog(blog);
    setShow(true);
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
                <p
                  className="text-muted"
                  style={{ maxHeight: "4.5em", overflow: "hidden" }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.content.length > 100
                          ? blog.content.slice(0, 100) + "..."
                          : blog.content,
                    }}
                  />
                </p>
                <Button
                  variant="primary"
                  className="fw-bold"
                  onClick={() => handleShow(blog)}
                >
                  Read More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      )}

      {/* Bootstrap Modal for Blog Content */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBlog?.image && (
            <div className="text-center mb-3">
              <img
                src={
                  selectedBlog.image.startsWith("http")
                    ? selectedBlog.image
                    : `${BASE_URL}/uploads/${selectedBlog.image}`
                }
                alt={selectedBlog.title}
                className="img-fluid rounded"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </div>
          )}
          <div
            className="text-dark"
            style={{ lineHeight: "1.6", wordWrap: "break-word" }}
          >
            <span dangerouslySetInnerHTML={{ __html: selectedBlog?.content }} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ViewBlogs;
