import React from "react";
import { Tab, Nav, Col, Row } from "react-bootstrap";
import {
  FaBeer,
  FaGamepad,
  FaHeart,
  FaMusic,
  FaMountain,
  FaDesktop,
  FaCode,
  FaCogs,
  FaJava,
  FaPython,
  FaProjectDiagram,
  FaLaptopCode,
  FaCloud,
   FaAws,
    FaNetworkWired,
     FaServer ,
 
} from "react-icons/fa"; // Additional icons for courses
import "../css/Trainings.css";
import { FaCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
const Trainings = () => {
  return (
    <div className="container mt-4 col-12">
      <Tab.Container id="left-tabs-example" defaultActiveKey="level1">
        <Row>
          <Col>
            <Nav variant="pills" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="level1" >
                <FaCircle style={{ color: "#FF6347", }} />{" "}
                  <span className="ms-2">Level 1 Programming</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level2">
                  <FaMountain  style={{ color: "#32CD32" }} />{" "}
                  <span className="ms-2">Level 2 Programming</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level3">
                  <FaStar style={{ color: "#FF1493" }} />{" "}
                  <span className="ms-2"> Level-3 Designing</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level4">
                  <FaTrophy style={{ color: "#1E90FF" }} />{" "}
                  <span className="ms-2">Level 4 Testing</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level5">
                  <FaMedal style={{ color: "#228B22" }} />{" "}
                  <span className="ms-2">Level 5 Cloud Technology</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="level1">
                <div className="level-box">
                                    <h3>
                                      <FaCircle style={{ color: "#FF6347" }} /> Level 1 Content
                                    </h3>
                                  <div className="container mt-5">
                                    <h2 className="text-center mb-4 text-primary">
                                      Basic Programming Courses
                                    </h2>
                
                                    {/* Row 1 */}
                                    <div className="row mb-4">
                                      <div className="col-12">
                                        <div className="p-4 border rounded shadow-sm">
                                          <h3 className="fw-bold">
                                            <FaDesktop
                                              style={{ color: "#FFD700" }}
                                              className="me-2"
                                            />{" "}
                                            Basic Computer + C Language
                                          </h3>
                                          <p>
                                            Learn the fundamentals of computers and C
                                            programming in one comprehensive course.
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
                                            <FaCode
                                              style={{ color: "#8A2BE2" }}
                                              className="me-2"
                                            />{" "}
                                            C Language + Data Structures
                                          </h3>
                                          <p>
                                            Explore deeper into C programming while mastering
                                            Data Structures for efficient coding.
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
                                            <FaCogs
                                              style={{ color: "#FF4500" }}
                                              className="me-2"
                                            />{" "}
                                            C Language + DS + C++ + AL (Algorithm)
                                          </h3>
                                          <p>
                                            Take your skills to the next level by learning C,
                                            Data Structures, C++, and Algorithms.
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
              </Tab.Pane>

              <Tab.Pane eventKey="level2">
      <div className="level-box">
        <h3>
          <FaMountain style={{ color: "#32CD32" }} /> Level 2 Content
        </h3>
        <div className="container mt-5">
          <h2 className="text-center mb-4 text-primary">Programming Courses</h2>

          {/* Row 1 */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="p-4 border rounded shadow-sm">
                <h3 className="fw-bold">
                  <FaJava style={{ color: "#FF8C00" }} className="me-2" />
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

          {/* Row 2 */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="p-4 border rounded shadow-sm">
                <h3 className="fw-bold">
                  <FaJava style={{ color: "#FF8C00" }} className="me-2" />
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
          </div>

          {/* Row 3 */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="p-4 border rounded shadow-sm">
                <h3 className="fw-bold">
                  <FaJava style={{ color: "#FF8C00" }} className="me-2" />
                  Java + Spring Boot + Full Stack (with Placement)
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

          {/* Row 4 */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="p-4 border rounded shadow-sm">
                <h3 className="fw-bold">
                  <FaJava style={{ color: "#FF8C00" }} className="me-2" />
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
          </div>

          {/* Row 5 */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="p-4 border rounded shadow-sm">
                <h3 className="fw-bold">
                  <FaPython style={{ color: "#FF6347" }} className="me-2" />
                  Basic Python
                </h3>
                <p>Learn the basics of Python programming, ideal for beginners.</p>
                <a
                  href="#"
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
                  <FaPython style={{ color: "#FF6347" }} className="me-2" />
                  Basic Python + ML + DS
                </h3>
                <p>
                  Dive deeper into Python and start with Machine Learning and
                  Data Science.
                </p>
                <a
                  href="#"
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
                  <FaPython style={{ color: "#FF6347" }} className="me-2" />
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
                  <FaPython style={{ color: "#FF6347" }} className="me-2" />
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
    </Tab.Pane>
              {/* Level 3 Content */}
              <Tab.Pane eventKey="level3">
                <div className="level-box">
                  <h3>
                    <FaStar style={{ color: "#FF1493" }} /> Level 3 Content
                  </h3>
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
                                <h3 className="mb-0">
                                  Web Designing (HTML5 + CSS3 + Bootstrap + JS)
                                </h3>
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
                                <h3 className="mb-0">
                                  Entry Level MEAN Stack (HTML5 + CSS3 + Bootstrap + JS + Basic React)
                                </h3>
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
                                <h3 className="mb-0">
                                  Advanced Level MEAN Stack (HTML5 + CSS3 + Bootstrap + JS + React Framework + Project)
                                </h3>
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
                </div>
              </Tab.Pane>

              {/* Level 4 Content */}
              <Tab.Pane eventKey="level4">
                <div className="level-box">
                  <h3>
                    <FaTrophy style={{ color: "#1E90FF" }} /> Level 4 Content
                  </h3>
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
                </div>
              </Tab.Pane>

              {/* Level 5 Content */}
              <Tab.Pane eventKey="level5" id="level5">
                <div className="level-box">
                  <h3>
                    <FaMedal style={{ color: "#228B22" }} /> Level 5 Content
                  </h3>
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
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Trainings;
