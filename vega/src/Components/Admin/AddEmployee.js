import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../api";
import bcrypt from "bcryptjs";

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeId: "",
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
    department: "",
    location: "Warangal",
    employeeType: "",
    salary: "",
    dob: "",
    hireDate: "",
    experience: "",
    gender: "",
    aadharNumber: "",
    password: "",  // Store password before hashing
  });

  const navigate = useNavigate();

  const locations = ["Warangal", "Hyderabad", "Bangalore"];
  const designations = [
    "md/boardofdirectors", "manager", "hr", "employee", "intern"
  ];
  const experienceOptions = ["0-1 years", "2-5 years", "6-10 years", "10+ years"];
  const employeeTypes = ["Full-time", "Part-time", "Contract"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { ...otherData } = employeeData; // Save original password

      // Hash the password before sending it
      // const hashedPassword = await bcrypt.hash(password, 10);
      await api.post("/employee/add", { ...otherData});
      Swal.fire("Success!", "Employee added successfully!", "success").then(() =>
        navigate("/hr/viewemployee")
      );
    } catch (error) {
      Swal.fire("Error", "Failed to add employee.", "error");
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Add New Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="employeeId" className="mb-3">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control type="text" name="employeeId" value={employeeData.employeeId} onChange={handleInputChange} required placeholder="Enter Employee ID" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={employeeData.name} onChange={handleInputChange} required placeholder="Enter full name" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={employeeData.email} onChange={handleInputChange} required placeholder="Enter email" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phoneNumber" value={employeeData.phoneNumber} onChange={handleInputChange} required placeholder="Enter phone number" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" name="gender" value={employeeData.gender} onChange={handleInputChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="aadharNumber" className="mb-3">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control type="text" name="aadharNumber" value={employeeData.aadharNumber} onChange={handleInputChange} required placeholder="Enter Aadhar Number" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="role" className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" name="role" value={employeeData.role} onChange={handleInputChange} required>
                <option value="">select</option>
                {designations.map((role, index) => (
                  <option key={index} value={role}>{role}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="department" className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" name="department" value={employeeData.department} onChange={handleInputChange} required placeholder="Enter Department" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="location" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control as="select" name="location" value={employeeData.location} onChange={handleInputChange} required>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="employeeType" className="mb-3">
              <Form.Label>Employee Type</Form.Label>
              <Form.Control as="select" name="employeeType" value={employeeData.employeeType} onChange={handleInputChange} required>
                <option value="">Select Type</option>
                {employeeTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="salary" className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="number" name="salary" value={employeeData.salary} onChange={handleInputChange} required placeholder="Enter salary" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dob" className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dob" value={employeeData.dob} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="hireDate" className="mb-3">
              <Form.Label>Hire Date</Form.Label>
              <Form.Control type="date" name="hireDate" value={employeeData.hireDate} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="experience" className="mb-3">
              <Form.Label>Experience</Form.Label>
              <Form.Control as="select" name="experience" value={employeeData.experience} onChange={handleInputChange} required>
                <option value="">Select Experience</option>
                {experienceOptions.map((exp, index) => (
                  <option key={index} value={exp}>{exp}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={employeeData.password} onChange={handleInputChange} required placeholder="Enter password" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mb-3 w-100">
          Add Employee
        </Button>
      </Form>
    </Container>
  );
};

export default AddEmployee;
