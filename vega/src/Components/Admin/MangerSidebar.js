import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MangerSidebar = () => {
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
         <div>
      <div className="dashboard">
      <div className="dashboard-nav">
        <header>
          <Link to="#!" className="menu-toggle">
            <i className="fas fa-bars"></i>
          </Link>
          <Link to="#" className="brand-logo">
            <i className="fas fa-anchor"></i> <span> Manager Dashboard</span>
          </Link>
        </header>
        <nav className="dashboard-nav-list">
          <Link to="/manager/" className="dashboard-nav-item ">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
          <Link to="/manager/viewemployee" className="dashboard-nav-item">
            <i className="fas fa-file-upload"></i> ViewEmployee
          </Link>

          <Link to="/manager/workstatus" className="dashboard-nav-item">
            <i className="fas fa-cogs"></i> Work status
          </Link>
          <Link to="/manager/viewscheduling" className="dashboard-nav-item">
            <i className="fas fa-user"></i> Scheduling
          </Link>
          
          <Link to="/manager/accessaccounting" className="dashboard-nav-item">
            <i className="fas fa-user"></i> Access Accounting
          </Link>
         
          <div className="nav-item-divider"></div>
          <Link to="#" className="dashboard-nav-item">
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>
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
      
    </div>
  )
}

export default MangerSidebar
