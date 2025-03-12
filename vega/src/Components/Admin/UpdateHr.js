import React, { useState } from 'react';
import axios from 'axios';
import '../../css/AddHr.css';

const UpdateHr = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    position: '',
    department: '',
    location: '',
    employeeType: '',
    salary: '',
    manager: '',
    workShift: '',
    leaveBalance: '',
    dob: '',
    hireDate: '',
    status: '',
    performanceRating: '',
    certifications: '',
    lastPromotionDate: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the URL with your API endpoint
      const response = await axios.put('http://localhost:8080/api/hr/update', formData);
      console.log('Employee updated:', response.data);
      // Handle success (e.g., show success message or redirect)
    } catch (error) {
      console.error('There was an error updating the employee:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="container">
      <section className="get-in-touch">
        <h1 className="text-center">Update Hr</h1>
        <form className="contact-form row" onSubmit={handleSubmit}>
          {Object.keys(formData).map((field, index) => (
            <div key={index} className="form-field col-lg-6">
              <input
                id={field}
                name={field}
                placeholder={field.replace(/([A-Z])/g, ' $1').toUpperCase()} // Format placeholder text
                className="input-text js-input"
                type={field.includes('Date') || field === 'salary' || field === 'leaveBalance' ? 'number' : 'text'}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div className="form-field col-lg-12">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateHr;
