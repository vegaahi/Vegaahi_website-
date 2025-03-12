import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import api from "../api";

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blog/getallblogs");
        setBlogs(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
        Swal.fire({ icon: "error", title: "Oops!", text: "Failed to fetch blogs. Please try again." });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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
                      src={`./${blog.image}`} 
                      alt={blog.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  </div>
                )}
                <h5 className="fw-bold text-dark">{blog.title}</h5>
                <p className="text-muted" style={{ maxHeight: "4.5em", overflow: "hidden" }}>
                  <span dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 100) + "..." }} />
                </p>
                <Button variant="primary" className="fw-bold">
                  Read More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ViewBlogs;
