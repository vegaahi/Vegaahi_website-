import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Apply = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.job; 

  const [formData, setFormData] = useState({ name: '', email: '', experience: '', resume: null });
  const [errors, setErrors] = useState({ name: '', email: '', experience: '', resume: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      const allowedTypes = ['application/pdf', 'image/jpeg'];
      if (!allowedTypes.includes(fileType)) {
        setErrors({ ...errors, resume: 'Only .pdf or .jpg files are allowed.' });
        setFormData({ ...formData, resume: null });
      } else {
        setErrors({ ...errors, resume: '' });
        setFormData({ ...formData, resume: file });
      }
    }
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let valid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      valid = false;
    } else {
      newErrors.name = '';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.experience) {
      newErrors.experience = 'Experience is required.';
      valid = false;
    } else {
      newErrors.experience = '';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required.';
      valid = false;
    } else {
      newErrors.resume = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // You can replace this with a custom API endpoint for your own server
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('experience', formData.experience);
    if (formData.resume) formDataToSend.append('resume', formData.resume);

    try {
      // Replace this with your own API endpoint
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formDataToSend, // Send form data including file
      });

      const resData = await response.json();

      if (resData.success) {
        Swal.fire({
          icon: 'success',
          title: 'Application Submitted!',
          text: 'Your application has been successfully sent. You will receive an email confirmation shortly.',
        });
        setFormData({ name: '', email: '', experience: '', resume: null });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed!',
          text: resData.message || 'There was an error submitting your application. Please try again later.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'An error occurred!',
        text: 'There was an issue with your application submission. Please try again later.',
      });
    }
  };

  return (
    <div className="container my-5">
      <button onClick={() => navigate(-1)} className="btn btn-link">
        <i className="fas fa-arrow-left"></i> Back
      </button>
      <h2 className="text-center mb-4">Apply for {job?.title}</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience</label>
              <textarea
                className="form-control"
                id="experience"
                value={formData.experience}
                onChange={handleInputChange}
              ></textarea>
              {errors.experience && <div className="text-danger">{errors.experience}</div>}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                className="form-control-file"
                id="resume"
                onChange={handleFileChange}
              />
              {errors.resume && <div className="text-danger">{errors.resume}</div>}
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
