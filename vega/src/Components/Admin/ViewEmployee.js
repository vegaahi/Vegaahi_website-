import React, { useState, useEffect } from "react";
import { Table, Button, Pagination } from "react-bootstrap";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "../../css/ViewEmployee.css"; // Import custom CSS for additional responsiveness
import { Link } from "react-router-dom";
import axios from "axios";

const ViewEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5); // Number of employees per page

  useEffect(() => {
    fetchEmployees();
  }, [currentPage]);

  // Fetch employee data from API
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/employees?page=${currentPage}&size=${employeesPerPage}`);
      setEmployees(response.data.content); // Assuming response has a `content` array
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Delete employee function
  const deleteEmployee = async (employeeId) => {
    try {
      const confirmation = window.confirm("Are you sure you want to delete?");
      if (confirmation) {
        await axios.delete(`http://localhost:8080/api/employees/${employeeId}`);
        alert("Employee deleted successfully!");
        fetchEmployees(); // Reload employee list after deletion
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee.");
    }
  };

  return (
    <div className="container mt-3">
      {/* Header with title and button */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <h2 className="table-title">Employee Details</h2>
        {/* Pagination */}
        <Pagination className="justify-content-center">
          {Array.from(
            { length: Math.ceil(employees.length / employeesPerPage) },
            (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>

        <Link to="/admin/addemployee" className="text-decoration-none">
          <Button variant="primary" className="add-employee-btn">
            <FaPlus /> Add Employee
          </Button>
        </Link>
      </div>

      {/* Employee Table with Scroll Feature */}
      <div
        className="table-responsive"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        <Table striped bordered hover className="employee-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Department</th>
              <th>Location</th>
              <th>Employee Type</th>
              <th>Salary</th>
              <th>Manager</th>
              <th>Work Shift</th>
              <th>Date of Birth</th>
              <th>Hire Date</th>
              <th>Performance Rating</th>
              <th>Certifications</th>
              <th>Last Promotion Date</th>
              <th>Photo</th>
              <th>PAN Number</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.department}</td>
                  <td>{employee.location}</td>
                  <td>{employee.employeeType}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.manager}</td>
                  <td>{employee.workShift}</td>
                  <td>{employee.dob}</td>
                  <td>{employee.hireDate}</td>
                  <td>{employee.performanceRating}</td>
                  <td>{employee.certifications}</td>
                  <td>{employee.lastPromotionDate}</td>
                  <td>{employee.photo}</td>
                  <td>{employee.panNumber}</td>
                  <td>{employee.gender}</td>
                  <td>
                    <Link
                      to={`/admin/updateemployee/${employee.id}`}
                      className="text-decoration-none"
                    >
                      <Button variant="" className="action-btn me-2">
                        <FaEdit />
                      </Button>
                    </Link>
                    <Button
                      variant=""
                      className="action-btn"
                      onClick={() => deleteEmployee(employee.id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="19">No employees found.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewEmployee;
