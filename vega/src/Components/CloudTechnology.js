import React from 'react';
import { FaCloud, FaAws, FaNetworkWired, FaServer } from 'react-icons/fa';

const CloudTechnology = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Cloud Technology Courses</h2>

      {/* Row of Courses */}
      <div className="row">
        {/* Course 1: Cloud Technology */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaCloud style={{ color: "#1E90FF" }} className="me-3" />
              <h3 className="mb-0">Cloud Technology</h3>
            </div>
            <p>Learn the fundamentals of cloud computing and how it can be leveraged in modern businesses.</p>
            <a
              href="https://drive.google.com/file/d/1OEVbtWt2fH9hiUBoTuYa49E1JPsgWFxV/view?usp=sharing"
              className="btn btn-primary"
              aria-label="View Cloud Technology course content"
            >
              View Course Content
            </a>
          </div>
        </div>

        {/* Course 2: AWS + Cloud */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaAws style={{ color: "#FF9900" }} className="me-3" />
              <h5 className="mb-0">AWS + Cloud</h5>
            </div>
            <p>Get hands-on experience with Amazon Web Services (AWS) and its integration with cloud technologies.</p>
            <a
              href="https://drive.google.com/file/d/1lBR1GXXPRwSrgNVPY3hGyvKvINkmQ5x_/view?usp=sharing"
              className="btn btn-primary"
              aria-label="View AWS + Cloud course content"
            >
              View Course Content
            </a>
          </div>
        </div>

        {/* Course 3: AWS (DevOps + Kubernetes) */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaAws style={{ color: "#FF9900" }} className="me-3" />
              <h5 className="mb-0">AWS (DevOps + Kubernetes)</h5>
            </div>
            <p>Learn AWS tools along with DevOps and Kubernetes for effective cloud infrastructure management.</p>
            <a
              href="#"
              className="btn btn-primary"
              aria-label="View AWS (DevOps + Kubernetes) course content"
            >
              View Course Content
            </a>
          </div>
        </div>

        {/* Course 4: Networking */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaNetworkWired style={{ color: "#32CD32" }} className="me-3" />
              <h5 className="mb-0">Networking</h5>
            </div>
            <p>Understand the key principles of computer networking and how they apply to cloud environments.</p>
            <a
              href="#"
              className="btn btn-primary"
              aria-label="View Networking course content"
            >
              View Course Content
            </a>
          </div>
        </div>

        {/* Course 5: Servers (Windows & Linux) */}
        <div className="col-12 mb-4">
          <div className="border p-4 rounded shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <FaServer style={{ color: "#8B0000" }} className="me-3" />
              <h5 className="mb-0">Servers (Windows & Linux)</h5>
            </div>
            <p>Learn how to manage and configure both Windows and Linux servers in a cloud environment.</p>
            <a
              href="https://drive.google.com/file/d/1aEIEYVH5kQ04Mqp3lsEBCMp5wAx7OsnA/view"
              className="btn btn-primary"
              aria-label="View Servers (Windows & Linux) course content"
            >
              View Course Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudTechnology;
