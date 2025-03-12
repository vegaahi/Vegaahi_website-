import React from 'react';
import { FaDesktop, FaCode, FaCogs } from 'react-icons/fa';

const Testing = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Testing Courses</h2>

      {/* Row of Courses */}
      <div className="row">
        {/* Course 1: Manual Testing */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaDesktop style={{ color: "#FFD700" }} className="me-3" />
              <h3 className="mb-0">
                Manual Testing
              </h3>
            </div>
            <p>
              Learn the fundamentals of manual testing, including test case design and execution techniques.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              aria-label="View Manual Testing course content"
            >
              View Course Content
            </a>
          </div>
        </div>

        {/* Course 2: Manual Testing + Automation Testing (Selenium) */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaCode style={{ color: "#8A2BE2" }} className="me-3" />
              <h3 className="mb-0">
                Manual Testing + Automation Testing (Selenium)
              </h3>
            </div>
            <p>
              Master both manual testing and automation testing using Selenium for web application testing.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              aria-label="View Manual Testing + Automation Testing (Selenium) course content"
            >
              View Course Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
