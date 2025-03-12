import React, { useState } from 'react';
import axios from 'axios';
import '../../css/AddHr.css';

const AddHr = () => {
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
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/hr', formData); // Replace with your API endpoint
      console.log('HR added successfully:', response.data);
      // Optionally, redirect to another page or reset form
    } catch (error) {
      console.error('Error adding HR:', error);
    }
  };

  return (
    <div className="container">
      <section className="get-in-touch">
        <h1 className=" text-center">Add Hr</h1>
        <form className="contact-form row" onSubmit={handleSubmit}>
          <div className="form-field col-lg-6">
            <input
              id="name"
              placeholder="Name"
              className="input-text js-input"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="email"
              placeholder="Email"
              className="input-text js-input"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="phoneNumber"
              placeholder="Phone Number"
              className="input-text js-input"
              type="text"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="position"
              placeholder="Position"
              className="input-text js-input"
              type="text"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="department"
              placeholder="Department"
              className="input-text js-input"
              type="text"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="location"
              placeholder="Location"
              className="input-text js-input"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="employeeType"
              placeholder="Employee Type"
              className="input-text js-input"
              type="text"
              value={formData.employeeType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="salary"
              placeholder="Salary"
              className="input-text js-input"
              type="number"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="manager"
              placeholder="Manager"
              className="input-text js-input"
              type="text"
              value={formData.manager}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="workShift"
              placeholder="Work Shift"
              className="input-text js-input"
              type="text"
              value={formData.workShift}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="leaveBalance"
              placeholder="Leave Balance"
              className="input-text js-input"
              type="number"
              value={formData.leaveBalance}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="dob"
              placeholder="Date of Birth"
              className="input-text js-input"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="hireDate"
              placeholder="Hire Date"
              className="input-text js-input"
              type="date"
              value={formData.hireDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="status"
              placeholder="Status"
              className="input-text js-input"
              type="text"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="performanceRating"
              placeholder="Performance Rating"
              className="input-text js-input"
              type="text"
              value={formData.performanceRating}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="certifications"
              placeholder="Certifications"
              className="input-text js-input"
              type="text"
              value={formData.certifications}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-6">
            <input
              id="lastPromotionDate"
              placeholder="Last Promotion Date"
              className="input-text js-input"
              type="date"
              value={formData.lastPromotionDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field col-lg-12">
            <input
              id="message"
              placeholder="Message"
              className="input-text js-input"
              type="text"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="form-field col-lg-12">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddHr;
