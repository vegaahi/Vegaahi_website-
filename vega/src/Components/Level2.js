import React from 'react';
import { FaMountain, FaJava, FaPython, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Level2 = () => {
  const navigate = useNavigate();

  // Handle back button click
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        

        {/* Level 2 Content Title */}
        <h3 className="fw-bold m-3" >
          <FaMountain style={{ color: '#32CD32' }} /> Level 2 Content
        </h3>
        {/* Back Button */}
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

      <div className="container ">
        <h2 className="text-center mb-4 text-primary">Programming Courses</h2>

        {/* Row 1 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaJava style={{ color: '#FF8C00' }} className="me-2" />
                Core Java
              </h3>
              <p>
                Learn the fundamentals of Java programming language and core
                concepts.
              </p>
              <a
                href="https://drive.google.com/file/d/19zmJGNA_6cCpq4fgGPy1p-sStkBTzHRv/view?usp=sharing"
                className="btn btn-primary"
                aria-label="View Core Java course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div>

        {/* Row 2
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaJava style={{ color: '#FF8C00' }} className="me-2" />
                Java (Core Java + Advanced Java) + (HTML5 + CSS3 + JS + SQL) + Real-Time Project (Internship Certificate)
              </h3>
              <p>
                A comprehensive course combining Java, web technologies, and
                real-world project experience.
              </p>
              <a
                href="https://drive.google.com/file/d/1CvqfuIgo0Q_UKRQC_les7mQk_u9ck7Gh/view?usp=sharing"
                className="btn btn-primary"
                aria-label="View Java Full Stack course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div> */}

        {/* Row 3 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaJava style={{ color: '#FF8C00' }} className="me-2" />
                Java + Spring Boot + Full Stack
              </h3>
              <p>
                Master Java and Spring Boot framework with a full-stack
                project, including placement assistance.
              </p>
              <a
                href="https://drive.google.com/file/d/18t-rWnR86u1TPB5X0P8kXq-TZXeStPE9/view?usp=sharing"
                className="btn btn-primary"
                aria-label="View Java + Spring Boot Full Stack course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div>

        {/* Row 4
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaJava style={{ color: '#FF8C00' }} className="me-2" />
                Java + Spring Boot + Full Stack (without Placement)
              </h3>
              <p>
                Learn Java and Spring Boot with a full-stack project but
                without placement assistance.
              </p>
              <a
                href="https://drive.google.com/file/d/18t-rWnR86u1TPB5X0P8kXq-TZXeStPE9/view?usp=sharing"
                className="btn btn-primary"
                aria-label="View Java + Spring Boot Full Stack course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div> */}

        {/* Row 5 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaPython style={{ color: '#FF6347' }} className="me-2" />
                Basic Python
              </h3>
              <p>Learn the basics of Python programming, ideal for beginners.</p>
              <a
                href="https://drive.google.com/file/d/1mlt5gb4tH3BQNIQcTZl2ggSi-dmLlE2C/view"
                className="btn btn-primary"
                aria-label="View Basic Python course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div>

        {/* Row 6 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaPython style={{ color: '#FF6347' }} className="me-2" />
                Basic Python + ML + DS
              </h3>
              <p>
                Dive deeper into Python and start with Machine Learning and
                Data Science.
              </p>
              <a
                href="https://drive.google.com/file/d/1dC3TVwsZ63Ln2s8TAsUZ55yglDw05A_r/view"
                className="btn btn-primary"
                aria-label="View Python + ML + DS course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div>

        {/* Row 7 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaPython style={{ color: '#FF6347' }} className="me-2" />
                Python + TKINTER + ML
              </h3>
              <p>
                Learn Python, Tkinter for GUI development, and Machine
                Learning in this comprehensive course.
              </p>
              <a
                href="https://drive.google.com/file/d/1JUndxy6_iWabUJWPleZqp6eG21LIh3Dt/view?usp=sharing"
                className="btn btn-primary"
                aria-label="View Python + Tkinter + ML course content"
              >
                View Course Content
              </a>
            </div>
          </div>
        </div>

        {/* Row 8 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm">
              <h3 className="fw-bold">
                <FaPython style={{ color: '#FF6347' }} className="me-2" />
                Basic Python + TKINTER + DS + Framework (FLASK/DJANGO)
              </h3>
              <p>
                This course covers Python, Tkinter, Data Science, and web
                frameworks like Flask/Django.
              </p>
              <a
                href="https://drive.google.com/file/d/1dC3TVwsZ63Ln2s8TAsUZ55yglDw05A_r/view?usp=sharing"
                className="btn btn-primary"
                aria-label="View Python + Tkinter + DS + Framework course content"
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

export default Level2;
