import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/EmployeeDashboard.css";
import { motion } from "framer-motion";

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);

  useEffect(() => {
    if (user?.email) {
      const fetchData = async () => {
        try {
          const response = await api.get(`/employee/getbyemail/${user.email}`);
          setEmployeeDetails(response.data);
        } catch (err) {
          setError("Failed to fetch employee data.");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [user]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleDetails = () => setShowFullDetails(!showFullDetails);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;

  return (
    <div className={`employee-dashboard ${darkMode ? "dark" : "light"}`}>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="dashboard-title">Employee Dashboard</h2>
          <div>
            <button className="btn btn-secondary me-2" onClick={toggleTheme}>
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
            <button className="btn btn-outline-primary" onClick={toggleDetails}>
              {showFullDetails ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        {employeeDetails && (
          <>
            <div className="row g-4 mb-4">
              <div className="col-md-3">
                <div className="info-card salary">
                  <h6>Salary</h6>
                  <p>₹ {employeeDetails.salary}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info-card experience">
                  <h6>Experience</h6>
                  <p>{employeeDetails.experience} yrs</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info-card projects">
                  <h6>Designation</h6>
                  <p>{employeeDetails.designation}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info-card rating">
                  <h6>Joining Date</h6>
                  <p>{new Date(employeeDetails.hireDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {showFullDetails && (
              <motion.div className="employee-details" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <ul className="list-group">
                      <li className="list-group-item">Name: {employeeDetails.name}</li>
                      <li className="list-group-item">Email: {employeeDetails.email}</li>
                      <li className="list-group-item">Phone: {employeeDetails.phoneNumber}</li>
                      <li className="list-group-item">Role: {employeeDetails.role}</li>
                      <li className="list-group-item">Department: {employeeDetails.department}</li>
                      <li className="list-group-item">Location: {employeeDetails.location}</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group">
                      <li className="list-group-item">Type: {employeeDetails.employeeType}</li>
                      <li className="list-group-item">DOB: {new Date(employeeDetails.dob).toLocaleDateString()}</li>
                      <li className="list-group-item">Hire Date: {new Date(employeeDetails.hireDate).toLocaleDateString()}</li>
                      <li className="list-group-item">Gender: {employeeDetails.gender}</li>
                      <li className="list-group-item">Aadhar: {employeeDetails.aadharNumber}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
