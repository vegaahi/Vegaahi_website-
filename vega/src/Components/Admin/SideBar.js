import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../../css/SideBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SideBar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  // Function to handle opening of Offcanvas
  const handleOpenOffcanvas = () => {
    setIsOffcanvasOpen(true);
  };

  // Function to handle closing of Offcanvas
  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <>
      {/* Sidebar (Responsive with Off-Canvas) */}
      <div className="d-none d-md-inline-block col-md-3 col-lg-2 sidebar bg-light vh-100">
        {/* Sidebar for Medium and Larger Devices */}
        <div>
          <h5 className="py-3 text-center">HR Dashboard</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <i className="fas fa-tachometer-alt me-2"></i>
              <Link to="/hr/hrdashboard" className="text-decoration-none text-dark">HrDashboard</Link>
            </li>
            <li className="list-group-item">
              <i className="fas fa-user-plus me-2"></i>
              <Link to="/hr/viewemployee" className="text-decoration-none text-dark">View Employee</Link>
            </li>
            <li className="list-group-item">
              <i className="fas fa-file-signature me-2"></i>
              <Link to="/hr/offerletter" className="text-decoration-none text-dark">Offer Letter</Link>
            </li>
            <li className="list-group-item">
              <i className="fas fa-chart-line me-2"></i>
              <Link to="/hr/incrementletter" className="text-decoration-none text-dark">Increment Letter</Link>
            </li>
            <li className="list-group-item">
              <i className="fas fa-file-alt me-2"></i>
              <Link to="/hr/experienceletter" className="text-decoration-none text-dark">Experience Letter</Link>
            </li>
            <li className="list-group-item">
              <i className="fas fa-file-invoice-dollar me-2"></i>
              <Link to="/hr/payslips" className="text-decoration-none text-dark">Payslips</Link>
            </li>
            <li className="list-group-item">
              <i className="fas fa-sign-out-alt me-2"></i>
              <Link to="/hr/logout" className="text-decoration-none text-dark">Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Off-Canvas Sidebar for Small Devices */}
      <div className="d-md-none">
        <button
          className="btn my-2"
          type="button"
          onClick={handleOpenOffcanvas}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={`offcanvas offcanvas-start ${isOffcanvasOpen ? "show" : ""}`}
          tabIndex="-1"
          id="offcanvasSidebar"
          aria-labelledby="offcanvasSidebarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
              HR Dashboard
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseOffcanvas}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fas fa-tachometer-alt me-2"></i>
                <Link to="" className="text-decoration-none text-dark" onClick={handleCloseOffcanvas}>
                  Dashboard
                </Link>
              </li>
              <li className="list-group-item">
                <i className="fas fa-user-plus me-2"></i>
                <Link to="hr/viewemployee" className="text-decoration-none text-dark" onClick={handleCloseOffcanvas}>
                  View Employee
                </Link>
              </li>
              <li className="list-group-item">
                <i className="fas fa-file-signature me-2"></i>
                <Link to="/hr/offerletter" className="text-decoration-none text-dark" onClick={handleCloseOffcanvas}>
                  Offer Letter
                </Link>
              </li>
              <li className="list-group-item">
                <i className="fas fa-chart-line me-2"></i>
                <Link to="/hr/incrementletter" className="text-decoration-none text-dark" onClick={handleCloseOffcanvas}>
                  Increment Letter
                </Link>
              </li>
              <li className="list-group-item">
                <i className="fas fa-file-alt me-2"></i>
                <Link to="/hr/experienceletter" className="text-decoration-none text-dark" onClick={handleCloseOffcanvas}>
                  Experience Letter
                </Link>
              </li>
              <li className="list-group-item">
                <i className="fas fa-file-invoice-dollar me-2"></i>
                <Link to="/hr/payslips" className="text-decoration-none text-dark" onClick={handleCloseOffcanvas}>
                  Payslips
                </Link>
              </li>
              <li className="list-group-item">
                <i className="fas fa-sign-out-alt me-2"></i>
                <Link to="/hr/logout" className="text-decoration-none text-dark" onClick={handleCloseOffcanvas}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
