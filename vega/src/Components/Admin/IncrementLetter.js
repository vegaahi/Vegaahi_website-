import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import jsPDF from "jspdf";
import axios from "axios";

const IncrementLetter = () => {
  const [letterData, setLetterData] = useState({
    employeeName: "",
    employeeId: "",
    designation: "",
    incrementPercentage: "",
    newCTC: "",
    effectiveDate: "",
  });

  const [employeeIdInput, setEmployeeIdInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLetterData({
      ...letterData,
      [name]: value,
    });
  };

  const fetchEmployeeData = async () => {
    if (!employeeIdInput) {
      setError("Please enter a valid Employee ID.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`http://localhost:8080/api/employees/${employeeIdInput}`);
      const { name, designation, currentCTC } = response.data;

      setLetterData({
        ...letterData,
        employeeName: name,
        employeeId: employeeIdInput,
        designation,
        newCTC: currentCTC,
      });
    } catch (err) {
      setError("Failed to fetch employee data. Please check the Employee ID.");
    } finally {
      setLoading(false);
    }
  };

  const calculateNewCTC = () => {
    const currentCTC = parseFloat(letterData.newCTC) || 0;
    const incrementPercentage = parseFloat(letterData.incrementPercentage) || 0;
    return ((currentCTC * (100 + incrementPercentage)) / 100).toFixed(2);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(16);
    doc.setTextColor(40);
    doc.setFont("helvetica", "bold");
    doc.text("Salary Increment Letter", 105, 20, { align: "center" });

    // Date
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 30);

    // Employee Details
    doc.setFontSize(12);
    doc.text(`PAVAN KUMAR ETUKALA,`, 20, 50);
    doc.text(`Employee Code: ${letterData.employeeId || "V04092417"}`, 20, 60);
    doc.text(`Designation: ${letterData.designation || "DEVELOPER"}`, 20, 70);

    // Subject
    doc.setFont("helvetica", "bold");
    doc.text("Subject: Letter of Increment", 20, 90);

    // Body
    doc.setFont("helvetica", "normal");
    const message = `We are pleased to inform you that keeping in view of your good performance at your workplace and role, the management has taken a decision to give you a salary increment of ${letterData.incrementPercentage || "20%"} % to your current CTC. Consequently, your compensation has been revised and the new enhanced compensation will be effective from ${letterData.effectiveDate || "1st December 2024"}.`;
    const messageLines = doc.splitTextToSize(message, 170);
    doc.text(messageLines, 20, 110);

    const newCTC = calculateNewCTC();
    const additionalInfo = `Please note that annual CTC with effect from ${letterData.effectiveDate || "1st December 2024"} will be Rs.${newCTC || "151351"}/- PA. (You can approach the HR Department for detailed salary break-up and tax changes). Further, you will also be eligible for other benefits as per your grade of employees.`;
    const additionalInfoLines = doc.splitTextToSize(additionalInfo, 170);
    doc.text(additionalInfoLines, 20, 140);

    const closingNote = `We are sure that this will motivate you and you will strive to continuously improve in your performance in future also.`;
    const closingNoteLines = doc.splitTextToSize(closingNote, 170);
    doc.text(closingNoteLines, 20, 170);

    // Footer
    doc.text("Yours Faithfully,", 20, 200);
    doc.text("Vegaahi IT Private Limited,", 20, 210);
    doc.text("HR Manager,", 20, 220);
    doc.text("A Lavanya", 20, 230);

    // Save PDF
    doc.save("Salary_Increment_Letter.pdf");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Generate Increment Letter</h2>

      <Form>
        <Row>
          <Col md={8}>
            <Form.Group controlId="employeeIdInput" className="mb-3">
              <Form.Label>Enter Employee ID</Form.Label>
              <Form.Control
                type="text"
                value={employeeIdInput}
                onChange={(e) => setEmployeeIdInput(e.target.value)}
                placeholder="Enter Employee ID"
              />
            </Form.Group>
          </Col>
          <Col md={4} className="text-center">
            <Button variant="primary" className="mt-4" onClick={fetchEmployeeData} disabled={loading}>
              {loading ? "Fetching..." : "Fetch Details"}
            </Button>
          </Col>
        </Row>

        {error && <p className="text-danger">{error}</p>}

        <Row>
          <Col md={6}>
            <Form.Group controlId="incrementPercentage" className="mb-3">
              <Form.Label>Increment Percentage (%)</Form.Label>
              <Form.Control
                type="number"
                name="incrementPercentage"
                value={letterData.incrementPercentage}
                onChange={handleInputChange}
                placeholder="Enter increment percentage"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="effectiveDate" className="mb-3">
              <Form.Label>Effective Date</Form.Label>
              <Form.Control
                type="date"
                name="effectiveDate"
                value={letterData.effectiveDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <Button variant="success" onClick={generatePDF}>
              Generate Increment Letter PDF
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default IncrementLetter;
