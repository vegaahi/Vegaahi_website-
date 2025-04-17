import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button, Container, Form, Row, Col, Table } from "react-bootstrap";
import api from "../../api";

// Import your logo
import logo from "../../Assests/logo.png"; // Adjust the path as needed

const OfferLetterGenerator = () => {
  const [offers, setOffers] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    employeeName: "",
    employeeId: "",
    designation: "",
    joiningDate: "",
    location: "Warangal",
    subject: "Offer Letter - Veegahii IT Pvt. Ltd.",
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const res = await api.get("/offerletters/getall");
      const data = res.data;
      setOffers(Array.isArray(data) ? data : data?.content || []);
    } catch (err) {
      console.error("Error fetching offers", err);
      setOffers([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await api.put(`/offerletters/updateByEmployeeId/${formData.employeeId}`, formData);
      } else {
        await api.post("/offerletters/create", formData);
      }

      setFormData({
        id: null,
        employeeName: "",
        employeeId: "",
        designation: "Intern",
        joiningDate: "",
        location: "Warangal",
        subject: "Internship Offer Letter - Veegahii IT Pvt. Ltd.",
      });
      setEditing(false);
      fetchOffers();
    } catch (err) {
      console.error("Error saving offer", err);
    }
  };

  const handleEdit = (offer) => {
    setFormData({ ...offer });
    setEditing(true);
  };

  const handleDelete = async (employeeId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this offer?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/offerletters/delete/${employeeId}`);
      alert("Offer letter deleted successfully!");
      fetchOffers();
    } catch (error) {
      console.error("Error deleting offer:", error);
    }
  };

  const generatePDF = () => {
    const { employeeName, employeeId, designation, joiningDate, location, subject } = formData;

    // Validate fields
    if (!employeeName || !employeeId || !designation || !joiningDate || !location || !subject) {
      alert("Please fill in all fields before generating the PDF.");
      return;
    }

    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString();

    // Add logo to background
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const imgWidth = 200;
      const imgHeight = 200;
      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;

      doc.addImage(img, "PNG", x, y, imgWidth, imgHeight, "", "NONE", 0.2); // 0.2 opacity

      // Header
      doc.setFontSize(18);
      doc.text("Veegahii IT Pvt. Ltd.", 20, 20);
      doc.setFontSize(12);
      doc.text("H.No: 1-8-1/B, New Nandanavanam, Kazipet,", 20, 30);
      doc.text("Hanamkonda, Warangal - 506003", 20, 36);
      doc.text("Email: veegahiiit@gmail.com", 20, 42);
      doc.text(`Date: ${currentDate}`, 150, 42);

      // Title
      doc.setFontSize(14);
      doc.text("OFFER LETTER", 90, 60);

      // Content
      const content = `
To,
${employeeName},
${location}.

Subject: ${subject}

Dear ${employeeName},

We are pleased to offer you the position of ${designation} at Veegahii IT Pvt. Ltd., starting on ${joiningDate}. Your Employee ID is ${employeeId}.

Your appointment as ${designation} will take place at our Warangal office, where you will be required to report to the HR Manager on your designated date of joining.

We look forward to welcoming you aboard.

Sincerely,
HR Manager
Veegahii IT Pvt. Ltd.
      `;

      const lines = doc.splitTextToSize(content.trim(), 180);
      doc.text(lines, 20, 80);
      doc.save(`${employeeName}_OfferLetter.pdf`);
    };
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">{editing ? "Edit" : "Generate"} Offer Letter</h2>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                readOnly
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
              >
                <option value="">Select Designation</option>
                <option value="Intern">Intern</option>
                <option value="Software Developer I (Entry-level)">Software Developer I (Entry-level)</option>
                <option value="Software Developer II (Mid-level)">Software Developer II (Mid-level)</option>
                <option value="Senior Software Developer">Senior Software Developer</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Architect (e.g., Solution Architect, Software Architect)">Architect (e.g., Solution Architect, Software Architect)</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="QA Engineer / Tester">QA Engineer / Tester</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Server Administrator">Server Administrator</option>
                <option value="Team Manager">Team Manager</option>
                <option value="HR Manager">HR Manager</option>
                <option value="Digital Marketing Executive">Digital Marketing Executive</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button type="submit" variant={editing ? "warning" : "primary"} className="me-3">
            {editing ? "Update Offer" : "Save Offer"}
          </Button>
          <Button variant="success" onClick={generatePDF}>
            Generate PDF
          </Button>
        </div>
      </Form>

      <hr />

      <h4 className="mt-4">All Offer Letters</h4>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Designation</th>
            <th>Joining Date</th>
            <th>Location</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offers.length > 0 ? (
            offers.map((offer, index) => (
              <tr key={offer.id}>
                <td>{index + 1}</td>
                <td>{offer.employeeName}</td>
                <td>{offer.employeeId}</td>
                <td>{offer.designation}</td>
                <td>{new Date(offer.joiningDate).toLocaleDateString()}</td>
                <td>{offer.location}</td>
                <td>{offer.subject}</td>
                <td>
                  <Button variant="info" size="sm" onClick={() => handleEdit(offer)} className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(offer.employeeId)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">No offers available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default OfferLetterGenerator;
