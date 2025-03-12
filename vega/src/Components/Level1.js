import React from 'react';
import { FaCircle, FaDesktop, FaCode, FaCogs, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Level1 = () => {
  const navigate = useNavigate();

  // Handle back button click
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        {/* Back Button */}
       

        {/* Level 1 Content Title */}
        <h3 className="fw-bold m-3">
          <FaCircle style={{ color: '#FF6347' }} /> Level 1 Content
        </h3>
        <button
          onClick={handleBackClick}
          className="btn btn-light d-flex align-items-center justify-content-center m-3"
          style={{
            width: '40px',
            height: '40px',
            fontSize: '20px',
            marginRight: '16px', // Space between the button and title
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
          
          }}
        >
          <FaArrowLeft />
        </button>
      </div>

      <div className="container">
        <h2 className="text-center mb-4 text-primary">Basic Programming Courses</h2>

        {/* Row 1 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaDesktop style={{ color: '#FFD700' }} className="me-2" /> Basic Computer + C Language
              </h3>
              <p>
                Learn the fundamentals of computers and C programming in one comprehensive course.
              </p>
              <a
                href="https://drive.google.com/file/d/12mYS11PfFwCRiOIP_zag9Egdkgo_cx5i/view?usp=sharing"
                className="btn btn-primary"
                aria-label="View Basic Computer and C Language course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-4" id="level2">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaCode style={{ color: '#8A2BE2' }} className="me-2" /> C Language + Data Structures
              </h3>
              <p>
                Explore deeper into C programming while mastering Data Structures for efficient coding.
              </p>
              <a
                href="#"
                className="btn btn-primary"
                aria-label="View C Language and Data Structures course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaCogs style={{ color: '#FF4500' }} className="me-2" /> C Language + DS + C++ + AL (Algorithm)
              </h3>
              <p>
                Take your skills to the next level by learning C, Data Structures, C++, and Algorithms.
              </p>
              <a
                href="#"
                className="btn btn-primary"
                aria-label="View C Language, Data Structures, C++, and Algorithm course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level1;
