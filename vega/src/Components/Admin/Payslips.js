import React, { useState } from "react";
import { Button, Form, Row, Col, Container, Table } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Payslips = () => {
  const [payslipData, setPayslipData] = useState({
    employeeName: "",
    employeeId: "",
    designation: "",
    payPeriod: "",
    basicSalary: "",
    hra: "",
    medicalAllowance: "",
    providentFund: "",
    specialAllowance: "",
    overtime: "",
    tda: "", // Travelling and Daily Allowance
    leavesDeduction: "", // Leaves Deduction
  });

  const [netSalary, setNetSalary] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayslipData({
      ...payslipData,
      [name]: value,
    });
  };

  const calculateNetSalary = () => {
    const basic = parseFloat(payslipData.basicSalary || 0);
    const hra = parseFloat(payslipData.hra || 0);
    const medical = parseFloat(payslipData.medicalAllowance || 0);
    const pf = parseFloat(payslipData.providentFund || 0);
    const special = parseFloat(payslipData.specialAllowance || 0);
    const overtime = parseFloat(payslipData.overtime || 0);
    const tda = parseFloat(payslipData.tda || 0);
    const leaves = parseFloat(payslipData.leavesDeduction || 0);
    const net = basic + hra + medical + special + overtime + tda - pf - leaves;
    setNetSalary(net.toFixed(2));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(16);
    doc.setTextColor(40);
    doc.text("VEGAAHI IT PRIVATE LIMITED", 75, 20);
    doc.setFontSize(10);
    doc.text("Regd. No: U62013TS2024PTC181697", 85, 25);

    // Payslip Title
    doc.setFontSize(14);
    doc.text("Payslip", 95, 40);

    // Date
    const today = new Date();
    const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    doc.text(`Date: ${formattedDate}`, 160, 40);

    // Employee Details
    doc.autoTable({
      startY: 50,
      head: [["Employee Details", ""]],
      body: [
        ["Employee Name", payslipData.employeeName],
        ["Employee ID", payslipData.employeeId],
        ["Designation", payslipData.designation],
        ["Month of Salary", payslipData.payPeriod],
      ],
      theme: "grid",
      headStyles: { fillColor: [240, 240, 240] },
    });

    // Salary Breakdown
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 10,
      head: [["Particulars", "Monthly Salary (₹)"]],
      body: [
        ["Basic Salary", payslipData.basicSalary],
        ["House Rent Allowance (HRA)", payslipData.hra],
        ["Medical Allowance", payslipData.medicalAllowance],
        ["Employees' Provident Fund (PF)", payslipData.providentFund],
        ["Special Allowance (Bonus)", payslipData.specialAllowance],
        ["Overtime Duty (OT)", payslipData.overtime],
        ["Travelling and Daily Allowance (TDA)", payslipData.tda],
        ["Leaves Deduction", payslipData.leavesDeduction],
        ["Net Salary", netSalary],
      ],
      theme: "grid",
      headStyles: { fillColor: [240, 240, 240] },
      columnStyles: {
        1: { halign: "right" },
      },
    });

    // Save PDF
    doc.save("Payslip.pdf");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Generate Employee Payslip</h2>

      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="employeeName" className="mb-3">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                name="employeeName"
                value={payslipData.employeeName}
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
                value={payslipData.employeeId}
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
                value={payslipData.designation}
                onChange={handleInputChange}
                placeholder="Enter designation"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="payPeriod" className="mb-3">
              <Form.Label>Month of Salary</Form.Label>
              <Form.Control
                type="text"
                name="payPeriod"
                value={payslipData.payPeriod}
                onChange={handleInputChange}
                placeholder="Enter month (e.g., December)"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="basicSalary" className="mb-3">
              <Form.Label>Basic Salary</Form.Label>
              <Form.Control
                type="number"
                name="basicSalary"
                value={payslipData.basicSalary}
                onChange={handleInputChange}
                placeholder="Enter basic salary"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="hra" className="mb-3">
              <Form.Label>HRA</Form.Label>
              <Form.Control
                type="number"
                name="hra"
                value={payslipData.hra}
                onChange={handleInputChange}
                placeholder="Enter HRA"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="medicalAllowance" className="mb-3">
              <Form.Label>Medical Allowance</Form.Label>
              <Form.Control
                type="number"
                name="medicalAllowance"
                value={payslipData.medicalAllowance}
                onChange={handleInputChange}
                placeholder="Enter medical allowance"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="providentFund" className="mb-3">
              <Form.Label>Provident Fund (PF)</Form.Label>
              <Form.Control
                type="number"
                name="providentFund"
                value={payslipData.providentFund}
                onChange={handleInputChange}
                placeholder="Enter PF deduction"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="specialAllowance" className="mb-3">
              <Form.Label>Special Allowance</Form.Label>
              <Form.Control
                type="number"
                name="specialAllowance"
                value={payslipData.specialAllowance}
                onChange={handleInputChange}
                placeholder="Enter special allowance"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="overtime" className="mb-3">
              <Form.Label>Overtime</Form.Label>
              <Form.Control
                type="number"
                name="overtime"
                value={payslipData.overtime}
                onChange={handleInputChange}
                placeholder="Enter overtime"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="tda" className="mb-3">
              <Form.Label>Travelling and Daily Allowance (TDA)</Form.Label>
              <Form.Control
                type="number"
                name="tda"
                value={payslipData.tda}
                onChange={handleInputChange}
                placeholder="Enter TDA"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="leavesDeduction" className="mb-3">
              <Form.Label>Leaves Deduction</Form.Label>
              <Form.Control
                type="number"
                name="leavesDeduction"
                value={payslipData.leavesDeduction}
                onChange={handleInputChange}
                placeholder="Enter leaves deduction"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <Button
              variant="primary"
              className="me-2"
              onClick={calculateNetSalary}
            >
              Calculate Net Salary
            </Button>
            <Button
              variant="success"
              onClick={generatePDF}
              disabled={!netSalary}
            >
              Generate Payslip PDF
            </Button>
          </Col>
        </Row>
      </Form>

      {netSalary > 0 && (
        <Container className="mt-5">
          <h4 className="text-center mb-4">Payslip Preview</h4>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>Employee Name</th>
                <td>{payslipData.employeeName}</td>
              </tr>
              <tr>
                <th>Employee ID</th>
                <td>{payslipData.employeeId}</td>
              </tr>
              <tr>
                <th>Designation</th>
                <td>{payslipData.designation}</td>
              </tr>
              <tr>
                <th>Month of Salary</th>
                <td>{payslipData.payPeriod}</td>
              </tr>
              <tr>
                <th>Basic Salary</th>
                <td>₹{payslipData.basicSalary}</td>
              </tr>
              <tr>
                <th>HRA</th>
                <td>₹{payslipData.hra}</td>
              </tr>
              <tr>
                <th>Medical Allowance</th>
                <td>₹{payslipData.medicalAllowance}</td>
              </tr>
              <tr>
                <th>Provident Fund (PF)</th>
                <td>₹{payslipData.providentFund}</td>
              </tr>
              <tr>
                <th>Special Allowance</th>
                <td>₹{payslipData.specialAllowance}</td>
              </tr>
              <tr>
                <th>Overtime</th>
                <td>₹{payslipData.overtime}</td>
              </tr>
              <tr>
                <th>Travelling and Daily Allowance (TDA)</th>
                <td>₹{payslipData.tda}</td>
              </tr>
              <tr>
                <th>Leaves Deduction</th>
                <td>₹{payslipData.leavesDeduction}</td>
              </tr>
              <tr>
                <th>Net Salary</th>
                <td>₹{netSalary}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      )}
    </Container>
  );
};

export default Payslips;
