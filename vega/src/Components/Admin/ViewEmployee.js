import React, { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col, Pagination } from "react-bootstrap";
import api from "../../api";
import { Link } from "react-router-dom";
const ViewEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  useEffect(() => {
    api.get("/employee/getall")
      .then(response => {
        console.log("API Response:", response.data); 
        if (Array.isArray(response.data)) {
          setEmployees(response.data);
        } else {
          console.error("Expected an array but got:", typeof response.data);
          setEmployees([]);
        }
      })
      .catch(error => {
        console.error("Error fetching employees:", error);
        setEmployees([]);
      });
  }, []);

  // Pagination Logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col>
          <h2 className="text-center text-primary">Employee List</h2>
        </Col>
        <Col className="text-end">
          <Link to="/hr/addemployee">
            <Button variant="success">Add Employee</Button>
          </Link>
        </Col>
      </Row>

      <div className="table-responsive">
        <Table className="table-striped table-hover shadow-sm">
          <thead className="table-dark text-center">
            <tr>
              <th>Employee ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Employee Type</th>
              <th>Salary</th>
              <th>Date of Birth</th>
              <th>Hire Date</th>
              <th>Experience</th>
              <th>Gender</th>
              <th>Aadhar Number</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.length > 0 ? (
              currentEmployees.map(employee => (
                <tr key={employee.employeeId} className="text-center">
                  <td>{employee.employeeId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.location}</td>
                  <td>{employee.employeeType}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.dob}</td>
                  <td>{employee.hireDate}</td>
                  <td>{employee.experience}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.aadharNumber}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="15" className="text-center text-muted py-3">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination className="justify-content-center"></Pagination>
      {/* Pagination */}
      <Pagination className="justify-content-center">
        <Pagination.Prev
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </Container>
  );
};

export default ViewEmployee;
