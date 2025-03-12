import React from "react";
import "../css/Banner.css"; // Add custom styles if necessary
import banner1 from "../Assests/banner.jpeg";
// Import specific icons from React Icons
import { FaPencilAlt, FaChartBar, FaDatabase } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container-fluid banner mt-5">
      <div className="row align-items-center">
        {/* Left Section - Image */}
        <div className="col-md-4 p-0">
          <img
            src={banner1} // Replace with your image URL
            alt="Team Collaboration"
            className="img-fluid w-100"
          />
        </div>

        {/* Right Section - Text */}
        <div className="col-md-8 d-flex align-items-center bg-primary text-white">
          <div className="p-4">
            
            <h2 className="mb-3">
              We deal with the aspects of <br />
              <span className="text-italic">professional IT Services</span>
            </h2>
            <p>
              Our IT services converge business and technology experts to help
              manage business processes of all categories.
            </p>

            {/* Features Section */}
            <div className="features-container">
              {/* Feature 1: Product Designs */}
              <div className="feature-item d-flex mb-3">
                <div className="feature-icon bg-white text-primary rounded-circle p-3 me-3">
                  <FaPencilAlt size={24} className="text-primary" />
                </div>
                <div>
                  <h5>Product Designs</h5>
                  <p>
                    Our firm is expert to create an efficient user interface
                    that makes user interaction lively.
                  </p>
                </div>
              </div>

              {/* Feature 2: Big Data & Analytics */}
              <div className="feature-item d-flex mb-3">
                <div className="feature-icon bg-white text-primary rounded-circle p-3 me-3">
                  <FaChartBar size={24} className="text-primary" />
                </div>
                <div>
                  <h5>Big Data & Analytics</h5>
                  <p>
                    Statistical analysis to help an organization gain insights
                    from large information web sets.
                  </p>
                </div>
              </div>

              {/* Feature 3: Maintain App Data */}
              <div className="feature-item d-flex">
                <div className="feature-icon bg-white text-primary rounded-circle p-3 me-3">
                  <FaDatabase size={24} className="text-primary" />
                </div>
                <div>
                  <h5>Maintain App Data</h5>
                  <p>
                    We create the optimal platform to develop and run digital
                    applications for our clients' apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
