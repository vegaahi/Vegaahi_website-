import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ExperienceLetter = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    designation: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePDF = () => {
    const { employeeName, employeeId, designation, startDate, endDate } = formData;
    const doc = new jsPDF();

    // Header Section
    doc.setFontSize(16);
    doc.setTextColor(40);
    doc.text("VEGAHII IT Pvt Ltd", 105, 20, { align: "center" });
    doc.setFontSize(10);
    doc.setTextColor(70);
   
    doc.text("Email: info@vegaahi.com | Ph: +91 9494579988", 105, 35, { align: "center" });

    // Title and Date
    const today = new Date();
    const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    doc.setFontSize(14);
    doc.setTextColor(40);
    doc.text("Experience Letter", 105, 50, { align: "center" });
    doc.setFontSize(12);
    doc.text(`Date: ${formattedDate}`, 160, 50);

    // Main Content
    const content = `
To Whom It May Concern,

This is to certify that Mr./Ms. ${employeeName} (Employee ID: ${employeeId}) was employed at VEGAHII IT Pvt Ltd as a ${designation} from ${startDate} to ${endDate}.

During their tenure, ${employeeName} exhibited exemplary skills and dedication in their role. They contributed significantly to projects and demonstrated professionalism, technical expertise, and a proactive approach to problem-solving.

We commend ${employeeName} for their positive attitude and wish them continued success in their future endeavors.

Sincerely,

[Authorized Signatory]
VEGAHII IT Pvt Ltd
    `;

    // Body content
    doc.setFontSize(12);
    doc.setTextColor(20);
    const lineHeight = 7;
    const startY = 65;
    const marginX = 10;

    const contentLines = doc.splitTextToSize(content, 190);
    contentLines.forEach((line, index) => {
      doc.text(line, marginX, startY + index * lineHeight);
    });

    // Footer Section
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(
      "This is a computer-generated document and does not require a signature.",
      105,
      275,
      { align: "center" }
    );

    // Address at the bottom
    doc.setFontSize(10);
    doc.setTextColor(70);
    doc.text(
      "Sai Pooja Complex, 1st Floor, Beside Big-C, Kishanpura, Hanamkonda, Warangal, Telangana 506001",
      105,
      285,
      { align: "center" }
    );

    // Save the PDF
    doc.save(`${employeeName}_Experience_Letter.pdf`);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Generate Experience Letter</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="employeeName" className="mb-3">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleInputChange}
                placeholder="Enter employee name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="employeeId" className="mb-3">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleInputChange}
                placeholder="Enter employee ID"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="designation" className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="Enter designation"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="startDate" className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="endDate" className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button
              variant="success"
              onClick={generatePDF}
              disabled={
                !formData.employeeName ||
                !formData.employeeId ||
                !formData.designation ||
                !formData.startDate ||
                !formData.endDate
              }
            >
              Generate Experience Letter
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ExperienceLetter;
