import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";
import Logo from "../Assests/vegaahilogo.png";
import "../css/Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth(); // Access user and logout function

  return (
    <nav className="navbar navbar-expand-lg bg-secondary px-3 py-2" id="nav">
      <div className="container-fluid d-flex align-items-center">
        {/* Left Section: Logo and Title */}
        <div className="d-flex align-items-center">
          <Link
            className="navbar-brand d-flex align-items-center text-decoration-none"
            to="/"
          >
            <img
              src={Logo}
              alt="Company Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
            <h3 className="mb-0 fw-bold text-white text-decoration-none">
              VEGAAHI IT PVT LTD
            </h3>
          </Link>
        </div>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler text-white ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Section: Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Show Navigation Links only if user is NOT logged in */}
            {!user && (
              <>
                {[
                  { path: "/", label: "Home", icon: <FaHome className="me-2" /> },
                  { path: "/aboutUs", label: "About", icon: <FaInfoCircle className="me-2" /> },
                  { path: "/services", label: "Services", icon: <FaBriefcase className="me-2" /> },
                  { path: "/contactus", label: "Contact Us", icon: <FaEnvelope className="me-2" /> },
                ].map((item, index) => (
                  <li key={index} className="nav-item mx-2">
                    <Link
                      to={item.path}
                      className="nav-link text-white d-flex align-items-center nav-hover"
                    >
                      {item.icon} {item.label}
                    </Link>
                  </li>
                ))}
              </>
            )}

            {/* Show Logout Button only if user is logged in */}
            {user && (
              <li className="nav-item mx-2">
                <button
                  onClick={logout}
                  className="nav-link text-white d-flex align-items-center nav-hover btn btn-link"
                >
                  <FaSignOutAlt className="me-2" /> Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
