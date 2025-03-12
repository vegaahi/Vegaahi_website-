import React from 'react'
import { FaMedal, FaCloud, FaAws, FaNetworkWired, FaServer,FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Level5 = () => {
  const navigate = useNavigate();
  
    // Handle back button click
    const handleBackClick = () => {
      navigate(-1); // Go back to the previous page
    };
  return (
    <div>
      <div>
        <div className="d-flex align-items-center mb-4">
        <h3 className='fw-bold m-3'>
                          <FaMedal style={{ color: "#228B22" }} /> Level 5 Content
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
                                    href="#"
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
                                    <h3 className="mb-0">AWS + Cloud</h3>
                                  </div>
                                  <p>Get hands-on experience with Amazon Web Services (AWS) and its integration with cloud technologies.</p>
                                  <a
                                    href="#"
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
                                    <h3 className="mb-0">AWS (DevOps + Kubernetes)</h3>
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
                                    <h3 className="mb-0">Networking</h3>
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
                                    <h3 className="mb-0">Servers (Windows & Linux)</h3>
                                  </div>
                                  <p>Learn how to manage and configure both Windows and Linux servers in a cloud environment.</p>
                                  <a
                                    href="#"
                                    className="btn btn-primary"
                                    aria-label="View Servers (Windows & Linux) course content"
                                  >
                                    View Course Content
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
    </div>
  )
}

export default Level5
