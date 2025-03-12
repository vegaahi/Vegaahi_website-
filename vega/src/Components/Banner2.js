import React from "react";
import "../css/Banner.css"; // Add custom styles if necessary
import Aiimg from "../Assests/Ai_img.png";
// Import specific icons from React Icons
import { FaRobot, FaBrain, FaCogs } from "react-icons/fa";

const Banner2 = () => {
  return (
    <div className="container-fluid banner mt-5">
      <div className="row align-items-center">
        {/* Right Section - Text */}
        <div className="col-md-8 d-flex align-items-center bg-primary text-white">
          <div className="p-4">
           
            <h2 className="mb-3">
              Leading the way in <br />
              <span className="text-italic">Artificial Intelligence Solutions</span>
            </h2>
            <p>
              Our AI services empower businesses to transform and innovate using
              cutting-edge technology and intelligent solutions.
            </p>

            {/* Features Section */}
            <div className="features-container">
              {/* Feature 1: AI-Powered Automation */}
              <div className="feature-item d-flex mb-3">
                <div className="feature-icon bg-white text-primary rounded-circle p-3 me-3">
                  <FaRobot size={24} className="text-primary" />
                </div>
                <div>
                  <h5>AI-Powered Automation</h5>
                  <p>
                    Automate repetitive tasks and streamline workflows with
                    intelligent AI-powered tools.
                  </p>
                </div>
              </div>

              {/* Feature 2: Machine Learning & Analytics */}
              <div className="feature-item d-flex mb-3">
                <div className="feature-icon bg-white text-primary rounded-circle p-3 me-3">
                  <FaBrain size={24} className="text-primary" />
                </div>
                <div>
                  <h5>Machine Learning & Analytics</h5>
                  <p>
                    Leverage machine learning models to gain actionable insights
                    and make data-driven decisions.
                  </p>
                </div>
              </div>

              {/* Feature 3: AI-Driven Development */}
              <div className="feature-item d-flex">
                <div className="feature-icon bg-white text-primary rounded-circle p-3 me-3">
                  <FaCogs size={24} className="text-primary" />
                </div>
                <div>
                  <h5>AI-Driven Development</h5>
                  <p>
                    Build intelligent applications powered by AI to meet
                    evolving business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Left Section - Image */}
        <div className="col-md-4 p-0">
          <img
            src={Aiimg} // Replace with your image URL
            alt="AI Collaboration"
            className="img-fluid w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
