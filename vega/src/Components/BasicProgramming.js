import React from 'react';

const BasicProgramming = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Basic Programming Courses</h2>

      {/* Row 1 */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="p-4 border rounded shadow-sm">
            <h5 className="fw-bold">Basic Computer + C Language</h5>
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
      <div className="row mb-4">
        <div className="col-12">
          <div className="p-4 border rounded shadow-sm">
            <h5 className="fw-bold">C Language + Data Structures</h5>
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
            <h5 className="fw-bold">C Language + DS + C++ + AL (Algorithm)</h5>
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
  );
};

export default BasicProgramming;
