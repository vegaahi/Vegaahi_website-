import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewHr = () => {
  const [hrData, setHrData] = useState([]);
  const navigate = useNavigate();

  // Fetch HR data from the API
  const fetchHrData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/hr'); // Replace with your API endpoint
      setHrData(response.data);
    } catch (error) {
      console.error('Error fetching HR data:', error);
    }
  };

  // Handle delete action
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this HR record?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/hr/${id}`); // Replace with your API endpoint
        fetchHrData(); // Refresh the table after deletion
      } catch (error) {
        console.error('Error deleting HR record:', error);
      }
    }
  };

  // Handle update action
  const handleUpdate = (id) => {
    navigate(`/admin/updatehr/${id}`); // Navigate to the Update HR page with the HR ID
  };

  useEffect(() => {
    fetchHrData();
  }, []);

  return (
    <div className='container col-sm-12'>
      <div className='d-flex justify-content-center mt-3'>
        <h1>View HR</h1>
      </div>

      <Link to='/admin/addhr' className='d-flex justify-content-end mb-2'>
        <button className='btn btn-primary me-5'>Add HR</button>
      </Link>

      <div style={{ overflowX: 'auto', width: '96%' }}>
        <table className='table table-bordered table-hover'>
          <thead className='text-center'>
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
          <tbody className='text-center'>
            {hrData.length > 0 ? (
              hrData.map((hr, index) => (
                <tr key={hr.id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{hr.name}</td>
                  <td>{hr.email}</td>
                  <td>{hr.phoneNumber}</td>
                  <td>{hr.department}</td>
                  <td>{hr.location}</td>
                  <td>{hr.employeeType}</td>
                  <td>{hr.salary}</td>
                  <td>{hr.manager}</td>
                  <td>{hr.workShift}</td>
                  <td>{hr.dob}</td>
                  <td>{hr.hireDate}</td>
                  <td>{hr.performanceRating}</td>
                  <td>{hr.certifications}</td>
                  <td>{hr.lastPromotionDate}</td>
                  <td>{hr.photo}</td>
                  <td>{hr.panNumber}</td>
                  <td>{hr.gender}</td>
                  <td>
                    <i
                      className='fas fa-edit me-3'
                      onClick={() => handleUpdate(hr.id)}
                      style={{ cursor: 'pointer', color: 'blue' }}
                    ></i>
                    <i
                      className='fas fa-trash'
                      onClick={() => handleDelete(hr.id)}
                      style={{ cursor: 'pointer', color: 'red' }}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='19'>No HR data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewHr;
