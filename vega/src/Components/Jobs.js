import React from 'react';
import { useNavigate } from 'react-router-dom';

const Job = () => {
  const jobData = [
    { id: 1, title: "Frontend Developer", description: "We are looking for a passionate Frontend Developer to join our team.", location: "Remote", type: "Full-time" },
    { id: 2, title: "Backend Developer", description: "Join our backend team to work on scaling our systems.", location: "New York, NY", type: "Full-time" },
    { id: 3, title: "UI/UX Designer", description: "Help us design intuitive and user-friendly experiences.", location: "San Francisco, CA", type: "Part-time" }
  ];

  const navigate = useNavigate(); // For programmatic navigation

  const handleApplyClick = (job) => {
    // Redirect to the apply page and pass job data as state
    navigate(`/apply/${job.id}`, { state: { job } });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Job Openings</h2>
      {/* <div className="list-group">
        {jobData.map((job) => (
          <div key={job.id} className="list-group-item mb-3">
            <h5 className="mb-2">{job.title}</h5>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <button onClick={() => handleApplyClick(job)} className="btn btn-primary">Apply Now</button>
          </div>
        ))}
      </div> */}
      currently we are not hiring..! Please check back later.
    </div>
  );
};

export default Job;
