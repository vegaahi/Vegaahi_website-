import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    position: "",
    department: "",
    location: "",
    employeeType: "",
    salary: "",
    manager: "",
    workShift: "",
    leaveBalance: "",
    dob: "",
    hireDate: "",
    status: "",
    performanceRating: "",
    certifications: "",
    lastPromotionDate: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/employees", employeeData);
      alert("Employee added successfully!");
      navigate("/admin/viewemployee"); // Use navigate for redirect
    } catch (error) {
      console.error("Error adding employee:", error);
      setError("Failed to add employee.");
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Add New Employee</h2>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={employeeData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter full name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={employeeData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="phoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={employeeData.phoneNumber}
                onChange={handleInputChange}
                required
                placeholder="Enter phone number"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="position" className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={employeeData.position}
                onChange={handleInputChange}
                required
                placeholder="Enter position"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="department" className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                as="select"
                name="department"
                value={employeeData.department}
                onChange={handleInputChange}
                required
              >
                <option value="">Select department</option>
                <option value="Software Development">Software Development</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="IT Support">IT Support</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="location" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={employeeData.location}
                onChange={handleInputChange}
                required
                placeholder="Enter location"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="employeeType" className="mb-3">
              <Form.Label>Employee Type</Form.Label>
              <Form.Control
                type="text"
                name="employeeType"
                value={employeeData.employeeType}
                onChange={handleInputChange}
                required
                placeholder="Enter employee type"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="salary" className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                name="salary"
                value={employeeData.salary}
                onChange={handleInputChange}
                required
                placeholder="Enter salary"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="manager" className="mb-3">
              <Form.Label>Manager</Form.Label>
              <Form.Control
                type="text"
                name="manager"
                value={employeeData.manager}
                onChange={handleInputChange}
                required
                placeholder="Enter manager name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="workShift" className="mb-3">
              <Form.Label>Work Shift</Form.Label>
              <Form.Control
                type="text"
                name="workShift"
                value={employeeData.workShift}
                onChange={handleInputChange}
                required
                placeholder="Enter work shift"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="leaveBalance" className="mb-3">
              <Form.Label>Leave Balance</Form.Label>
              <Form.Control
                type="number"
                name="leaveBalance"
                value={employeeData.leaveBalance}
                onChange={handleInputChange}
                required
                placeholder="Enter leave balance"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dob" className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={employeeData.dob}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="hireDate" className="mb-3">
              <Form.Label>Hire Date</Form.Label>
              <Form.Control
                type="date"
                name="hireDate"
                value={employeeData.hireDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="status" className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={employeeData.status}
                onChange={handleInputChange}
                required
                placeholder="Enter status"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="performanceRating" className="mb-3">
              <Form.Label>Performance Rating</Form.Label>
              <Form.Control
                type="number"
                name="performanceRating"
                value={employeeData.performanceRating}
                onChange={handleInputChange}
                required
                placeholder="Enter performance rating"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="certifications" className="mb-3">
              <Form.Label>Certifications</Form.Label>
              <Form.Control
                type="text"
                name="certifications"
                value={employeeData.certifications}
                onChange={handleInputChange}
                required
                placeholder="Enter certifications"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="lastPromotionDate" className="mb-3">
              <Form.Label>Last Promotion Date</Form.Label>
              <Form.Control
                type="date"
                name="lastPromotionDate"
                value={employeeData.lastPromotionDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {error && <div className="alert alert-danger">{error}</div>}

        <Button variant="primary" type="submit" className="mt-4 w-100">
          Add Employee
        </Button>
      </Form>
    </Container>
  );
};

export default AddEmployee;
