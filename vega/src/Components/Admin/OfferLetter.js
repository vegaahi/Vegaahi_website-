import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

const OfferLetterGenerator = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    employeeId: "",
    designation: "Software Engineer (Internship)",
    joiningDate: "",
    location: "Warangal",
    salaryDetails: {
      basicSalary: 5775,
      hra: 2887.5,
      medicalAllowance: 866.25,
      pf: 404.25,
      specialAllowance: 577.5,
    },
    grossSalary: 12610.5, // Derived Gross Salary
  });

  const [designations, setDesignations] = useState([
    "Software Engineer (Internship)",
    "Junior Software Developer",
    "Senior Software Developer",
    "Team Lead",
    "Project Manager",
  ]);

  useEffect(() => {
    // Fetch designations or other data from API
    axios
      .get("https://api.example.com/designations")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setDesignations(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching designations:", error);
      });
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      if (name === "basicSalary" || name === "hra" || name === "medicalAllowance" || name === "pf" || name === "specialAllowance") {
        const salaryDetails = {
          ...prevData.salaryDetails,
          [name]: parseFloat(value) || 0,
        };

        const grossSalary = Object.values(salaryDetails).reduce((total, amount) => total + amount, 0);
        updatedData.salaryDetails = salaryDetails;
        updatedData.grossSalary = grossSalary;
      }

      return updatedData;
    });
  };

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Page 1: Header and Introductory Details
    doc.setFontSize(16);
    doc.text("VEGAAHI IT PRIVATE LIMITED", 70, 20);
    doc.setFontSize(10);
    doc.text("Regd. No: U62013TS2024PTC181697", 80, 25);

    doc.setFontSize(14);
    doc.text("Letter of Appointment", 85, 40);

    doc.setFontSize(12);
    doc.text("Personal & Confidential", 10, 50);
    doc.text(`${employeeData.employeeName},`, 10, 60);
    doc.text(`${employeeData.location}.`, 10, 70);

    doc.text("Sub: Letter of Appointment", 10, 85);

    doc.text(
      `With reference to the discussion we had with you, we are pleased to appoint you as ${employeeData.designation} under the following terms and conditions:`,
      10,
      95,
      { maxWidth: 190, align: "justify" }
    );

    doc.text("1. Commencement Date", 10, 115);
    doc.text(`Your date of appointment will be effective from ${employeeData.joiningDate}.`, 10, 125);

    doc.text("2. Internship Salary and Benefits", 10, 135);
    doc.text(
      `Your Gross Salary is Rs. ${employeeData.grossSalary.toFixed(2)}/- subject to deduction of Tax at source. The detailed salary structure is as follows:`,
      10,
      145
    );

    doc.autoTable({
      startY: 155,
      head: [["Component", "Amount (Rs.)"]],
      body: Object.entries(employeeData.salaryDetails).map(([key, value]) => [
        key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
        value.toFixed(2),
      ]),
    });

    doc.addPage();

    // Page 2: Terms and Conditions
    doc.text("3. Place of work", 10, 20);
    doc.text(
      `Your initial employment location will be ${employeeData.location}. However, your services are transferable to any place in the country to any of the company’s associate or sister concern or its subsidiary client location, at the sole discretion of the management.`,
      10,
      30,
      { maxWidth: 190, align: "justify" }
    );

    doc.text("4. Working Hours", 10, 60);
    doc.text(
      "The day shift timings are 9:00 AM to 6:00 PM, with total working hours of 8 hours.",
      10,
      70
    );

    doc.text("5. Job Assignment/Reporting", 10, 90);
    doc.text(
      "In your assignment, you will be responsible for the duties, as more particularly laid out in the job description for this position. You will report directly to the supervisor nominated by the management.",
      10,
      100,
      { maxWidth: 190, align: "justify" }
    );

    doc.text("6. Probation, Confirmation & Termination", 10, 130);
    doc.text(
      "(a) You will be on probation for a period of 1 month (Internship) + 2 months from the date of your appointment. If your services are found satisfactory, you will be confirmed by means of written intimation. The management reserves the right to modify this period.",
      10,
      140,
      { maxWidth: 190, align: "justify" }
    );
    doc.text(
      "(b) During the probation period or its extension, either party may terminate the employment with prior notice (30 days for the company, 15 days for the employee). Upon confirmation, the notice period is 1 month for both parties.",
      10,
      170,
      { maxWidth: 190, align: "justify" }
    );

    doc.addPage();

    // Page 3: Additional Policies and Acceptance
    doc.text("7. Absence without Notice", 10, 20);
    doc.text(
      "Absence without leave or beyond the granted leave period will result in voluntary termination unless explained satisfactorily.",
      10,
      30,
      { maxWidth: 190, align: "justify" }
    );

    doc.text("8. Employment Regulations", 10, 50);
    doc.text(
      "You will adhere to the company’s policies, working diligently and maintaining the highest standards of integrity.",
      10,
      60,
      { maxWidth: 190, align: "justify" }
    );

    doc.text("9. Date of Joining", 10, 80);
    doc.text(
      "At the time of joining, please submit the required documents including academic certificates, resignation letters (if applicable), relieving letters, and proof of last drawn salary.",
      10,
      90,
      { maxWidth: 190, align: "justify" }
    );

    doc.text("10. Acceptance", 10, 110);
    doc.text(
      "Please sign and return the duplicate copy of this letter as a token of your acceptance. If you fail to do so within a week, this offer will be deemed withdrawn.",
      10,
      120,
      { maxWidth: 190, align: "justify" }
    );

    doc.text("Yours faithfully,", 10, 140);
    doc.text("For VEGAAHI IT PRIVATE LIMITED,", 10, 150);
    doc.text("HR Manager,", 10, 160);
    doc.text("Vegaahi IT Pvt Ltd Team.", 10, 170);

    doc.text("I accept the appointment on the terms and conditions contained herein.", 10, 190);
    doc.text("Signature: _________________________", 10, 200);
    doc.text("Date: _________________________", 10, 210);

    // Save PDF
    doc.save("OfferLetter.pdf");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Generate Offer Letter</h2>

      <Form>
      
          
      <Row>
          <Col md={6}>
            <Form.Group controlId="employeeName" className="mb-3">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                name="employeeName"
                value={employeeData.employeeName}
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
                value={employeeData.employeeId}
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
                as="select"
                name="designation"
                value={employeeData.designation}
                onChange={handleInputChange}
                required
              >
                {designations.map((designation, index) => (
                  <option key={index} value={designation}>
                    {designation}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="joiningDate" className="mb-3">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control
                type="date"
                name="joiningDate"
                value={employeeData.joiningDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <h4 className="mt-4">Salary Details</h4>
        {Object.keys(employeeData.salaryDetails).map((key, index) => (
          <Row key={index}>
            <Col md={6}>
              <Form.Group controlId={key} className="mb-3">
                <Form.Label>
                  {key
                    .charAt(0)
                    .toUpperCase() +
                    key
                      .slice(1)
                      .replace(/([A-Z])/g, " $1")
                      .toLowerCase()}
                </Form.Label>
                <Form.Control
                  type="number"
                  name={key}
                  value={employeeData.salaryDetails[key]}
                  onChange={(e) => handleInputChange(e)}
                  placeholder={`Enter ${key}`}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        ))}

        <Row className="mt-3">
          <Col md={6}>
            <h5>Gross Salary: ₹{employeeData.grossSalary.toFixed(2)}</h5>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <Button
              variant="success"
              onClick={generatePDF}
              disabled={
                !employeeData.employeeName ||
                !employeeData.joiningDate ||
                !Object.values(employeeData.salaryDetails).every((val) => val > 0)
              }
            >
              Generate Offer Letter
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default OfferLetterGenerator;
