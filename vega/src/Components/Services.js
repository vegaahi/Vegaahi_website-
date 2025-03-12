import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faRocket, faBriefcase, faMobile, faDesktop, faBook, faCloud, faLaptop, faPager, faRobot } from "@fortawesome/free-solid-svg-icons";
import "../css/Services.css"; // Make sure to include your CSS file here
import { FaAws } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa6";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";

const Services = () => {
  return (
    <div className="container">
    <h2 className=" font-weight-bold mt-3">Our Services</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline2 ">
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <lable className="timeline-content">
                <h3 className="title">Website Designing</h3>
                <p className="description">
                  
We design visually stunning, responsive, and user-friendly websites tailored to your business goals. Let us bring your vision to life with innovative web solutions.
                </p>
              </lable>
            </div>
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faMobile} />
              </span>
              <lable className="timeline-content">
                <h3 className="title">Mobile Application</h3>
                <p className="description">
                
                We design and develop engaging, interactive, and user-friendly mobile applications. Let us turn your ideas into impactful mobile solutions.

                </p>
              </lable>
            </div>
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <lable className="timeline-content">
                <h3 className="title">Client Application</h3>
                <p className="description">
                We create tailored client applications that are efficient, secure, and user-centric. Let us deliver solutions that streamline your business operations.
                </p>
              </lable>
            </div>
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faDesktop} />
              </span>
              <lable className="timeline-content">
                <h3 className="title">Web Applications</h3>
                <p className="description">
                We develop dynamic, secure, and scalable web applications tailored to your needs. Let us empower your business with innovative online solutions.
                </p>
              </lable>
            </div>
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faBook} />
              </span>
              <lable className="timeline-content">
                <h3 className="title">Real Time Trainings</h3>
                <p className="description">
                We offer real-time training sessions designed to provide hands-on experience and practical skills. Let us help you stay ahead with industry-relevant expertise.
                </p>
              </lable>
            </div>
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faCloud} />
              </span>
              <lable className="timeline-content">
                <h3 className="title">AWS services and setups</h3>
                <p className="description">
                We provide comprehensive AWS services and setup solutions to optimize your cloud infrastructure. Let us help you leverage AWS for scalability, security, and performance.
                </p>
              </lable>
            </div>
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faServer} />
              </span>
              <lable className="timeline-content">
                <h3 className="title">Server intigration</h3>
                <p className="description">
                We offer seamless server integration services to ensure smooth communication between your systems. Let us optimize your infrastructure for better performance and reliability.
                </p>
              </lable>
            </div>
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faLaptop} />
              </span>
              <lable className="timeline-content">
                <h3 className="title">Finish Schoolings</h3>
                <p className="description">
                We provide placement services to help students secure career opportunities after completing their schooling. Let us guide you toward a successful career with the right job placements.
                </p>
              </lable>
            </div>
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faPager} />
              </span>
              <lable  className="timeline-content">
                <h3 className="title">Academic Projects Development</h3>
                <p className="description">
                We specialize in developing academic projects that are innovative, practical, and aligned with your curriculum. Let us help you bring your academic ideas to life with expert guidance and development.
                </p>
              </lable>

            </div>
            <div className="timeline">
              <span className="icon">
                <FontAwesomeIcon icon={faRobot} />
              </span>
              <lable  className="timeline-content">
                <h3 className="title">AI & ML</h3>
                <p className="description">
                We offer AI and ML solutions that drive innovation through data-driven insights and automation. Let us help you harness the power of artificial intelligence to solve complex challenges.
                </p>
              </lable>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
