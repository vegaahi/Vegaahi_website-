import React from 'react'
import { FaTrophy, FaDesktop, FaCode,FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Level4 = () => {
  const navigate = useNavigate();
  
    // Handle back button click
    const handleBackClick = () => {
      navigate(-1); // Go back to the previous page
    };
  return (
    <div>
     <div >
      <div className="d-flex align-items-center mb-4">
              
           
      <h3 className='fw-bold m-3'>
                         <FaTrophy style={{ color: "#1E90FF" }} /> Level 4 Content
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
                        <div className="container">
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
                                     href="https://drive.google.com/file/d/1aZ1DLWLqRJBMEdGf8VwGMjOF1TcxQySw/view?usp=sharing"
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
                                     href="https://drive.google.com/file/d/1L4Zrshg_BtMAZ7BlXO4H03cur-QKGMYF/view?usp=sharing"
                                     className="btn btn-primary"
                                     aria-label="View Manual Testing + Automation Testing (Selenium) course content"
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

export default Level4
