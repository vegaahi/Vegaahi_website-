import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const AddEmployee = () => {
   const [employeeData, setEmployeeData] = useState({
      employeeId: "",
      name: "",
      email: "",
      phoneNumber: "",
      designation: "", // Add this line
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
    });
    
    const designationOptions = [
      "Intern",
      "Software Developer I (Entry-level)",
      "Software Developer II (Mid-level)",
      "Senior Software Developer",
      "Team Lead",
      "Architect (e.g., Solution Architect, Software Architect)",
      "DevOps Engineer",
      "QA Engineer / Tester",
      "UI/UX Designer",
      "Server Administrator",
      "Team Manager",
      "HR Manager",
      "Digital Marketing Executive"
    ];
    

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const locations = ["Warangal", "Hyderabad", "Bangalore"];
  const designations = ["md/boardofdirectors", "manager", "hr", "employee", "intern"];
  const experienceOptions = ["0-1 years", "1-2 years", "2-3 years", "3-4 years", "4-5 years", "5-10 years",    "10+ years"];
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
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setLoading(true);

    try {
      const { ...otherData } = employeeData;

      await api.post("/employee/add", { ...otherData });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Employee added successfully!",
      }).then(() => navigate("/hr/viewemployee"));
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data ||
        "Failed to add employee.";

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Add New Employee</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="employeeId" className="mb-3">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                required
                type="text"
                name="employeeId"
                value={employeeData.employeeId}
                onChange={handleInputChange}
                placeholder="Enter Employee ID"
              />
              <Form.Control.Feedback type="invalid">
                Please enter employee ID.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={employeeData.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={employeeData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                name="phoneNumber"
                value={employeeData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                pattern="\d{10}"
              />
              <Form.Control.Feedback type="invalid">
                Enter a valid 10-digit phone number.
              </Form.Control.Feedback>
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
              <option value="">Select Designation</option>
              {designationOptions.map((title, index) => (
                <option key={index} value={title}>{title}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={employeeData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  minLength={6}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={() => setShowPassword(!showPassword)}
                  className="ms-2"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Password must be at least 6 characters.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        
        
            
                </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                required
                name="gender"
                value={employeeData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select gender.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="aadharNumber" className="mb-3">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                required
                type="text"
                name="aadharNumber"
                value={employeeData.aadharNumber}
                onChange={handleInputChange}
                pattern="\d{12}"
                placeholder="Enter Aadhar Number"
              />
              <Form.Control.Feedback type="invalid">
                Enter valid 12-digit Aadhar number.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="role" className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                required
                name="role"
                value={employeeData.role}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                {designations.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a role.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="department" className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                required
                type="text"
                name="department"
                value={employeeData.department}
                onChange={handleInputChange}
                placeholder="Enter Department"
              />
              <Form.Control.Feedback type="invalid">
                Enter department name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="location" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Select
                required
                name="location"
                value={employeeData.location}
                onChange={handleInputChange}
              >
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a location.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="employeeType" className="mb-3">
              <Form.Label>Employee Type</Form.Label>
              <Form.Select
                required
                name="employeeType"
                value={employeeData.employeeType}
                onChange={handleInputChange}
              >
                <option value="">Select Type</option>
                {employeeTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select employee type.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="salary" className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                required
                type="number"
                name="salary"
                value={employeeData.salary}
                onChange={handleInputChange}
                placeholder="Enter salary"
                min="1"
              />
              <Form.Control.Feedback type="invalid">
                Enter a valid salary.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dob" className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                required
                type="date"
                name="dob"
                value={employeeData.dob}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Select a date of birth.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="hireDate" className="mb-3">
              <Form.Label>Hire Date</Form.Label>
              <Form.Control
                required
                type="date"
                name="hireDate"
                value={employeeData.hireDate}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Select a hire date.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="experience" className="mb-3">
              <Form.Label>Experience</Form.Label>
              <Form.Select
                required
                name="experience"
                value={employeeData.experience}
                onChange={handleInputChange}
              >
                <option value="">Select Experience</option>
                {experienceOptions.map((exp, index) => (
                  <option key={index} value={exp}>
                    {exp}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select experience level.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

      

        <Button
          variant="primary"
          type="submit"
          className="mb-3 w-100"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Adding...
            </>
          ) : (
            "Add Employee"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default AddEmployee;
