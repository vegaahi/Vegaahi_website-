import React, { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col, Pagination } from "react-bootstrap";
import api from "../../api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/employee/delete/${id}`);
        setEmployees(employees.filter(employee => employee.employeeId !== id));

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Employee has been deleted.",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error("Error deleting employee:", error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to delete employee.",
        });
      }
    }
  };

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
              <th>Designation</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Employee Type</th>
              <th>Salary</th>
              <th>Date of Birth</th>
              <th>Hire Date</th>
              <th>Experience</th>
              <th>Gender</th>
              <th>Aadhar Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.length > 0 ? (
              currentEmployees.map(employee => (
                <tr key={employee.employeeId} className="text-center">
                  <td>{employee.employeeId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.location}</td>
                  <td>{employee.employeeType}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.dob}</td>
                  <td>{employee.hireDate}</td>
                  <td>{employee.experience}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.aadharNumber}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Link to={`/hr/editemployee/${employee.employeeId}`} className="btn btn-primary btn-sm me-2">
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(employee.employeeId)}>
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  </td>
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
