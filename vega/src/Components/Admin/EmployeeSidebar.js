import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../../css/Dashboard.css";

import { useAuth } from "../../context/AuthContext";

const EmployeeSidebar = () => {
    const { user } = useAuth(); // Get user from AuthContext
    useEffect(() => {
        const mobileScreen = window.matchMedia("(max-width: 990px)");
    
        const handleDropdownToggle = (event) => {
          const parentDropdown = event.currentTarget.closest(
            ".dashboard-nav-dropdown"
          );
          parentDropdown.classList.toggle("show");
          parentDropdown
            .querySelectorAll(".dashboard-nav-dropdown")
            .forEach((dropdown) => dropdown.classList.remove("show"));
    
          parentDropdown.parentElement
            .querySelectorAll(".dashboard-nav-dropdown")
            .forEach((sibling) => sibling.classList.remove("show"));
        };
    
        const handleMenuToggle = () => {
          if (mobileScreen.matches) {
            document
              .querySelector(".dashboard-nav")
              .classList.toggle("mobile-show");
          } else {
            document
              .querySelector(".dashboard")
              .classList.toggle("dashboard-compact");
          }
        };
    
        document
          .querySelectorAll(".dashboard-nav-dropdown-toggle")
          .forEach((toggle) => {
            toggle.addEventListener("click", handleDropdownToggle);
          });
    
        document.querySelectorAll(".menu-toggle").forEach((menuToggle) => {
          menuToggle.addEventListener("click", handleMenuToggle);
        });
    
        // Cleanup event listeners on unmount
        return () => {
          document
            .querySelectorAll(".dashboard-nav-dropdown-toggle")
            .forEach((toggle) => {
              toggle.removeEventListener("click", handleDropdownToggle);
            });
    
          document.querySelectorAll(".menu-toggle").forEach((menuToggle) => {
            menuToggle.removeEventListener("click", handleMenuToggle);
          });
        };
      }, []);
  return (
    <div>
      <div className="dashboard">
      <div className="dashboard-nav">
        <header>
          <Link to="#!" className="menu-toggle">
            <i className="fas fa-bars"></i>
          </Link>
          <Link to="#" className="brand-logo">
            <i className="fas fa-anchor"></i> <span>Employee</span>
          </Link>
        </header>
        <nav className="dashboard-nav-list">
          <Link to="/employee/" className="dashboard-nav-item ">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
          <Link to="/employee/profile" className="dashboard-nav-item">
            <i className="fas fa-file-upload"></i> profile
          </Link>

          {user?.department === "Marketing" && (
            
            <>
              <Link to="/employee/viewblogsadmin" className="dashboard-nav-item">
                <i className="fas fa-file-upload"></i> view blogs
              </Link>
              <Link to="/employee/addblog" className="dashboard-nav-item">
                <i className="fas fa-file-upload"></i> add blog
              </Link>
            </>
          )}

          {/* <Link to="/employee/viewblogsadmin" className="dashboard-nav-item">
            <i className="fas fa-file-upload"></i> view blogs
          </Link> */}
         
         
          <div className="nav-item-divider"></div>
        
        </nav>
      </div>
      <div className="dashboard-app">
        <header className="dashboard-toolbar">
          <Link to="" className="menu-toggle">
            <i className="fas fa-bars"></i>
          </Link>
        </header>
        
      </div>
    </div>
    </div>
  )
}

export default EmployeeSidebar
