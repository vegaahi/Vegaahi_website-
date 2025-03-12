import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeId: "",
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    location: "",
    employeeType: "",
    salary: "",
    manager: "",
    workShift: "",
    dob: "",
    hireDate: "",
    performanceRating: "",
    certifications: "",
    lastPromotionDate: "",
    photo: "",
    panNumber: "",
    gender: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); 

  // Fetch the employee details on component load
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/employees/${id}`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
        setError("Failed to load employee details.");
      }
    };

    fetchEmployee();
  }, [id]);

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
      await axios.put(`http://localhost:8080/api/employees/${id}`, employeeData);
      alert("Employee updated successfully!");
      navigate("/admin/viewemployee");
    } catch (error) {
      console.error("Error updating employee:", error);
      setError("Failed to update employee.");
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Update Employee</h2>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="employeeId" className="mb-3">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                name="employeeId"
                value={employeeData.employeeId}
                onChange={handleInputChange}
                readOnly
              />
            </Form.Group>
          </Col>
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
        </Row>

        <Row>
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
                placeholder="Enter manager"
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
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="performanceRating" className="mb-3">
              <Form.Label>Performance Rating</Form.Label>
              <Form.Control
                type="text"
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
          <Col md={6}>
            <Form.Group controlId="photo" className="mb-3">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                value={employeeData.photo}
                onChange={handleInputChange}
                required
                placeholder="Enter photo URL"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="panNumber" className="mb-3">
              <Form.Label>PAN Number</Form.Label>
              <Form.Control
                type="text"
                name="panNumber"
                value={employeeData.panNumber}
                onChange={handleInputChange}
                required
                placeholder="Enter PAN number"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={employeeData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {error && <div className="alert alert-danger">{error}</div>}

        <Button variant="primary" type="submit" className="mt-4 w-100">
          Update Employee
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateEmployee;
