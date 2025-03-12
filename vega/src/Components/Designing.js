import React from 'react';
import { FaLaptopCode, FaDesktop, FaCode, FaProjectDiagram } from 'react-icons/fa';

const Designing = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Designing Courses</h2>

      {/* Row of Courses */}
      <div className="row">
        {/* Course 1: Web Designing & Web Development */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaLaptopCode style={{ color: "#FFD700" }} className="me-3" />
              <h3 className="mb-0">
                Web Designing & Web Development (HTML5, CSS3, JS, Bootstrap)
              </h3>
            </div>
            <p>
              Learn web designing and development with hands-on experience in HTML5, CSS3, JS, and Bootstrap.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              aria-label="View Web Designing & Web Development course content"
            >
              View Course Content
            </a>
          </div>
        </div>

        {/* Course 2: Web Designing (HTML5 + CSS3 + Bootstrap + JS) */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaDesktop style={{ color: "#8A2BE2" }} className="me-3" />
              <h5 className="mb-0">
                Web Designing (HTML5 + CSS3 + Bootstrap + JS)
              </h5>
            </div>
            <p>
              Master web designing using HTML5, CSS3, Bootstrap, and JavaScript to create responsive websites.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              aria-label="View Web Designing (HTML5 + CSS3 + Bootstrap + JS) course content"
            >
              View Course Content
            </a>
          </div>
        </div>

        {/* Course 3: Entry Level MEAN Stack */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaCode style={{ color: "#FF4500" }} className="me-3" />
              <h5 className="mb-0">
                Entry Level MEAN Stack (HTML5 + CSS3 + Bootstrap + JS + Basic React)
              </h5>
            </div>
            <p>
              Learn the basics of the MEAN stack (MongoDB, Express, Angular, Node) and React for frontend development.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              aria-label="View Entry Level MEAN Stack course content"
            >
              View Course Content
            </a>
          </div>
        </div>

        {/* Course 4: Advanced Level MEAN Stack */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaProjectDiagram style={{ color: "#32CD32" }} className="me-3" />
              <h5 className="mb-0">
                Advanced Level MEAN Stack (HTML5 + CSS3 + Bootstrap + JS + React Framework + Project)
              </h5>
            </div>
            <p>
              Take your development skills to the next level by mastering the full MEAN stack and React framework.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              aria-label="View Advanced Level MEAN Stack course content"
            >
              View Course Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designing;
