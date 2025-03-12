import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mission from "../Assests/Mission.jpeg";
import vision from "../Assests/vision.jpeg";
import pawan from "../Assests/pawan3.jpg";
import sahit from "../Assests/sahith.jpg";
import saipavan from "../Assests/saipavan2.jpg";
import Saikrishna from "../Assests/saikrishna_img.jpg";
import Bharath from "../Assests/bharath_img.jpeg";
import Ramesh from "../Assests/ramesh.jpg";
// import slide1 from "../Assests/slide1.jpeg";
import lavanya from "../Assests/lavanya.jpg";
import sandeep from "../Assests//sandeep.jpg";
import ganesh from "../Assests/ganesh.jpg";
import EmployeeCard from "./EmployeeCard";
const AboutUs = () => {
  // Array of employee data
  const employees = [
    {
      image: sandeep,
      title: "CEO",
      name: "Sandeep Akkapelli",
      description:
        '"A CEO is the visionary leader who sets the direction, inspires innovation, and drives the organization towards growth and success."',
      about:
        "A highly skilled software engineer with expertise in React, Node.js, and Cloud computing. Passionate about creating scalable solutions and collaborating with cross-functional teams.",
    },
    {
      image: lavanya,
      title: "Human Resource Manager",
      name: "Lavanya Akkapelli",
      description:
        '"A software engineer crafts the backbone of technology, transforming complex problems into elegant, functional solutions that shape the future."',
      about:
        "Experienced in building scalable backend services with Node.js, Express, and MongoDB. Loves solving complex problems and integrating APIs.",
    },
    {
      image: Bharath,
      title: "Manager",
      name: "Bharath Polepaka",
      description:
        "A great leader inspires the vision, while a skilled manager turns that vision into reality through actionable goals .",
      about:
        "Proficient in HTML, CSS, JavaScript, and React. Enjoys turning designs into pixel-perfect, interactive websites with clean code.",
    },
    {
      image: Ramesh,
      title: "Python Developer",
      name: "Durga Ramesh Chinthapalli",
      description:
        '"Expertise in Python frameworks, problem-solving, and coding best practices, with a focus on automation, performance, and user-centric design."',
      about:
        "Experienced in building scalable backend services with Node.js, Express, and MongoDB. Loves solving complex problems and integrating APIs.",
    },
    {
      image: sahit,
      title: "Server Administrator",
      name: "Sahith Reddy Karka",
      description:
        '"Backend wizard with a passion for optimizing systems ."',
      about:
        "Experience in Installation, Configuration, Implementation, up-gradation, Maintenance and Creating and maintaining user accounts, profiles, security, rights, disk space and process monitoring. Experience in User & Group Security administration, backup & recovery.",
    },
    {
      image: Saikrishna,
      title: "Software Engineer",
      name: "Saikrishna Macha",
      description:
        '"Crafting innovation and mentoring future coders, my journey in software engineering has been a thrilling ride of growth and creativity."',
      about:
        "I’m a software engineer working with Spring Boot and React, with a year of experience building projects that (hopefully) won’t need a million patches. My tech stack is solid, and I also moonlight as a professional trainer, molding fresh developers into something other than code-breaking chaos architects.",
    },
    
    {
      image: saipavan,
      title: "Software Engineer",
      name: "Sai pavan Koudagani",
      description:
        '"Proficient in analyzing complex technical requirements, optimizing system performance, and integrating innovative solutions to enhance reliability and efficiency."',
      about:
        "Experienced in building scalable backend services with Node.js, Express, and MongoDB. Loves solving complex problems and integrating APIs.",
    },
    {
      image: pawan,
      title: "Software Engineer",
      name: "Pawan Etukala",
      description:
        '"With a keen eye for Design and Dev an eagerness to innovate, my journey as a fresh-faced software engineer is driven by passion and creativity."',
      about:
        "As a budding software engineer,I mix my knack for design with a zeal for innovation. Armed with Figma, React.js, and Spring Boot, I navigate the coding cosmos, dreaming up creative solutions and chuckling at my own bugs. Ready to turn fresh ideas into reality, one quirky line of code at a time.",
    },
    {
      image: ganesh,
      title: "Python Developer",
      name: "Ganesh Netha",
      description:
        'A budding Python developer is new to programming, eager to learn and build practical applications using Python.',
      about:
        "Experienced in building scalable backend services with Node.js, Express, and MongoDB. Loves solving complex problems and integrating APIs.",
    },
  ];

  return (
    <div className="container-fluid banner mt-2">
      {/* About Us Section */}
      <div className="col-md-12  bg-primary bg-opacity-50 " >
        <div className="p-4 text-center text-white">
          <h2 className="mb-3">
            About Us <br />
            <span className="text-italic">professional IT Services</span>
          </h2>
          <p className="px-5">
            "Veegahii IT Solutions offers world-class lab facilities located in
            the heart of the city. Our cutting-edge software training labs are
            equipped with modern classrooms featuring the latest teaching tools.
            We have a fully-fledged software lab with state-of-the-art PCs,
            connected in a network, and equipped with Open Source/Development
            software for optimal learning experiences."
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="row align-items-center mt-0">
        <div className="col-md-6 p-0">
          <img
            src={vision}
            alt="Team Collaboration"
            className="img-fluid w-100"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center bg-primary text-white">
          <div className="p-4">
            <h2 className="mb-3">
              Our Vision <br />
              <span className="text-italic">towards a better tomorrow</span>
            </h2>
            <p>
            "Our IT services bring together business and technology experts to efficiently manage business processes across various categories."
            </p>
            {/* Features Section */}
            <div className="features-container">
            "At Veegahii IT Solutions, we strive to empower businesses through innovative IT solutions. We are dedicated to providing cutting-edge technology that fosters growth and success. Our vision is to lead in delivering high-quality services that exceed client expectations. We aim to drive digital transformation and improve operational efficiency for organizations. Ultimately, we aspire to be a global leader in IT services, shaping the future of business through technology."
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row align-items-center">
        <div className="col-md-4 d-flex align-items-center bg-primary text-white">
          <div className="p-4">
            <h2 className="mb-3">
              Our Mission <br />
              <span className="text-italic">towards a better tomorrow</span>
            </h2>
            <p> Our mission is to bring together business and technology expertise to streamline and optimize business processes across all industries. </p>
            {/* Features Section */}
            <div className="features-container">
            Our mission is to deliver innovative IT solutions that drive business success.
We strive to empower organizations with cutting-edge technology and expert guidance.
Our focus is on optimizing business processes for greater efficiency and growth.
We are committed to providing exceptional customer service and continuous support.
Through collaboration and innovation, we aim to help businesses achieve their goals.
            </div>
          </div>
        </div>
        <div className="col-md-8 p-0">
          <img
            src={mission}
            alt="Team Collaboration"
            className="img-fluid w-100"
          />
        </div>
      </div>

      <h2 className="text-center">Our Team</h2>
      <div className="row d-flex  mt-4">
  {employees.map((emp, index) => (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-5 d-flex justify-content-evenly" key={index}> 
      <EmployeeCard
        image={emp.image}
        title={emp.title}
        name={emp.name}
        description={emp.description}
        about={emp.about}
      />
    </div>
  ))}
</div>


    </div>
  );
};

// const FeatureItem = ({ icon, title, description }) => (
//   <div className="feature-item d-flex mb-3">
//     <div className="feature-icon bg-white text-primary rounded-circle p-3 me-3">
//       {icon}
//     </div>
//     <div>
//       <h5>{title}</h5>
//       <p>{description}</p>
//     </div>
//   </div>
// );

export default AboutUs;
