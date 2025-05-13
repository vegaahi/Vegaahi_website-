import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import api from "../../api";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const [searchDay, setSearchDay] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [searchYear, setSearchYear] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get("/contact/getallcontactus");
        const data = response.data;
        const extractedMessages = Array.isArray(data.data) ? data.data : [];
        setMessages(extractedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
        Swal.fire("Error", "Failed to fetch user messages.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this message?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await api.delete(`/contact/delete/${id}`);
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
        Swal.fire("Deleted!", "The message has been deleted.", "success");
      } catch (error) {
        console.error("Delete error:", error);
        Swal.fire("Error", "Failed to delete message", "error");
      }
    }
  };

  const filteredMessages = messages
    .filter((msg) => {
      const search = searchTerm.toLowerCase();
      return (
        msg.name.toLowerCase().includes(search) ||
        msg.email.toLowerCase().includes(search) ||
        msg.phoneNumber.toString().includes(search)
      );
    })
    .filter((msg) => {
      if (!msg.createdAt) return false;
      const date = new Date(msg.createdAt);
      const dayMatch = searchDay
        ? date.getDate().toString() === searchDay
        : true;
      const monthMatch = searchMonth
        ? (date.getMonth() + 1).toString() === searchMonth
        : true;
      const yearMatch = searchYear
        ? date.getFullYear().toString() === searchYear
        : true;
      return dayMatch && monthMatch && yearMatch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <Container className="mt-5">
      <h2 className="text-center text-primary mb-4">📩 User Messages</h2>

      <Form className="mb-4">
        <Row className="mb-2">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Search by name, email or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Sort: Newest First</option>
              <option value="oldest">Sort: Oldest First</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Day"
                  value={searchDay}
                  onChange={(e) => setSearchDay(e.target.value)}
                  style={{ maxWidth: "60px" }}
                />
              </Col>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Month"
                  value={searchMonth}
                  onChange={(e) => setSearchMonth(e.target.value)}
                  style={{ maxWidth: "60px" }}
                />
              </Col>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Year"
                  value={searchYear}
                  onChange={(e) => setSearchYear(e.target.value)}
                  style={{ maxWidth: "60px" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : filteredMessages.length === 0 ? (
        <p className="text-center text-muted">No messages found.</p>
      ) : (
        <div
          style={{
            maxHeight: "500px",
            overflowY: "auto",
            paddingRight: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {filteredMessages.map((msg) => (
            <div
              key={msg._id}
              className="p-4 mb-3 border-bottom"
              style={{ lineHeight: "1.7" }}
            >
              <Row className="mb-2">
                <Col md={6}>
                  <strong>👤 Name:</strong> {msg.name}
                </Col>
                <Col md={6}>
                  <strong>📧 Email:</strong> {msg.email}
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md={6}>
                  <strong>📞 Phone:</strong> {msg.phoneNumber}
                </Col>
                <Col md={6}>
                  <strong>🕓 Date:</strong>{" "}
                  {msg.createdAt
                    ? new Date(msg.createdAt).toLocaleString()
                    : "N/A"}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <strong>💬 Message:</strong> <br /> {msg.message}
                </Col>
              </Row>
              <Row>
                <Col className="text-end">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(msg._id)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </Button>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ContactMessages;
