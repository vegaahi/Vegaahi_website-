// WorkStatus.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkStatus = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint to fetch employee work status data
    axios.get('http://localhost:8080/api/employees/work-status')
      .then(response => {
        // Simulate the API response structure (uncomment this line if testing without API)
        // response.data = [
        //   { id: 1, fullName: 'John Doe', position: 'Software Engineer', status: 'Active', lastActive: '2025-01-29 10:30:00' },
        //   { id: 2, fullName: 'Jane Smith', position: 'Project Manager', status: 'Inactive', lastActive: '2025-01-28 15:15:00' },
        // ];

        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employee data:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee Work Status</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Position</th>
              <th>Status</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.fullName}</td>
                  <td>{employee.position}</td>
                  <td>{employee.status}</td>
                  <td>{employee.lastActive}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No employees data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkStatus;
