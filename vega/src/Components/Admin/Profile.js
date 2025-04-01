import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../api"; 

const Profile = () => {
  const { user } = useAuth();
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employee details by email when the component mounts
  useEffect(() => {
    if (user && user.email) {
      const fetchEmployeeData = async () => {
        try {
          const response = await api.get(`/employee/getbyemail/${user.email}`);
          if (response.status !== 200) {
            throw new Error("Employee not found");
          }
          console.log(response.data);

          setEmployeeDetails(response.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchEmployeeData();
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      {employeeDetails ? (
        <>
          <h2>Welcome, {employeeDetails.name}</h2>
          <p><strong>Email:</strong> {employeeDetails.email || "Not available"}</p>
          <p><strong>Phone Number:</strong> {employeeDetails.phoneNumber || "Not available"}</p>
          <p><strong>Role:</strong> {employeeDetails.role || "Not available"}</p>
          <p><strong>Department:</strong> {employeeDetails.department || "Not available"}</p>
          <p><strong>Location:</strong> {employeeDetails.location || "Not available"}</p>
          <p><strong>Employee Type:</strong> {employeeDetails.employeeType || "Not available"}</p>
          <p><strong>Salary:</strong> {employeeDetails.salary || "Not available"}</p>
          <p><strong>Date of Birth:</strong> {new Date(employeeDetails.dob).toLocaleDateString() || "Not available"}</p>
          <p><strong>Hire Date:</strong> {new Date(employeeDetails.hireDate).toLocaleDateString() || "Not available"}</p>
          <p><strong>Experience:</strong> {employeeDetails.experience || "Not available"}</p>
          <p><strong>Gender:</strong> {employeeDetails.gender || "Not available"}</p>
          <p><strong>Aadhar Number:</strong> {employeeDetails.aadharNumber || "Not available"}</p>
        </>
      ) : (
        <p>Employee details not available</p>
      )}
    </div>
  );
};

export default Profile;
