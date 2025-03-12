import React from "react";
import { useNavigate } from "react-router-dom";  
import workLifeImage from "../Assests/worklifebalance.webp"; 
import cultureImage from "../Assests/culture.jpeg"; 

const LifeAtVegaahi = () => {
  const navigate = useNavigate();

 
  const handleExploreCareers = () => {
    navigate("/jobs"); 
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-3 text-primary">Life at Vegaahi</h2>
      <p className="text-center text-muted">
        Discover the perfect blend of work and life at Vegaahi.
      </p>

      <div className="row mt-5">
        
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column align-items-center text-center border rounded shadow-sm p-4 h-100">
            <img
              src={workLifeImage}
              alt="Work-Life Balance"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            <h3 className="text-primary">Work-Life Balance</h3>
            <p>
              At Vegaahi, we understand the importance of balancing work and personal life. 
              Flexible working hours and wellness programs ensure our employees stay productive and happy.
            </p>
            <ul className="list-unstyled">
              <li>Flexible working hours</li>
              <li>Remote work options</li>
              <li>Wellness initiatives</li>
            </ul>
          </div>
        </div>

        
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column align-items-center text-center border rounded shadow-sm p-4 h-100">
            <img
              src={cultureImage}
              alt="Our Culture"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            <h3 className="text-success">Our Culture</h3>
            <p>
              Vegaahi fosters a collaborative and inclusive work environment where 
              creativity and innovation thrive. We celebrate diversity and value each individual's contribution.
            </p>
            <ul className="list-unstyled">
              <li>Inclusive environment</li>
              <li>Team-building activities</li>
              <li>Celebration of achievements</li>
            </ul>
          </div>
        </div>
      </div>

    
      <div className="text-center mt-5">
        <p className="lead">
          Join Vegaahi and be part of a team where your well-being matters as much as your success!
        </p>
        
        <button className="btn btn-primary btn-lg" onClick={handleExploreCareers}>
          Explore Careers
        </button>
      </div>
    </div>
  );
};

export default LifeAtVegaahi;
