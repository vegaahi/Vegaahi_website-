import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../../css/SideBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SideBar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleOpenOffcanvas = () => {
    setIsOffcanvasOpen(true);
  };

  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  const menuItems = [
    { icon: "fas fa-tachometer-alt", label: "HR Dashboard", to: "/hr/" },
    { icon: "fas fa-user-plus", label: "View Employee", to: "/hr/viewemployee" },
    { icon: "fas fa-file-signature", label: "Offer Letter", to: "/hr/offerletter" },
    { icon: "fas fa-chart-line", label: "Increment Letter", to: "/hr/incrementletter" },
    { icon: "fas fa-file-alt", label: "Experience Letter", to: "/hr/experienceletter" },
    { icon: "fas fa-file-invoice-dollar", label: "Payslips", to: "/hr/payslips" },
    { icon: "fas fa-file-invoice-dollar", label: "Messages", to: "/hr/viewmessages" },
    { icon: "fas fa-sign-out-alt", label: "Logout", to: "/hr/logout" },
  ];

  return (
    <>
      {/* Sidebar for Medium and Larger Devices */}
      <div className="d-none d-md-block bg-light vh-100 p-3" style={{ width: "250px" }}>
        <h5 className="text-center mb-4">HR Dashboard</h5>
        <ul className="list-group">
          {menuItems.map((item, index) => (
            <li className="list-group-item d-flex align-items-center" key={index}>
              <i className={`${item.icon} me-2`}></i>
              <Link to={item.to} className="text-decoration-none text-dark">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Offcanvas Sidebar for Small Devices */}
      <div className="d-md-none">
        <button className="btn btn-light m-2" onClick={handleOpenOffcanvas}>
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={`offcanvas offcanvas-start ${isOffcanvasOpen ? "show" : ""}`}
          tabIndex="-1"
          style={{ visibility: isOffcanvasOpen ? "visible" : "hidden" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">HR Dashboard</h5>
            <button className="btn-close" onClick={handleCloseOffcanvas}></button>
          </div>
          <div className="offcanvas-body p-0">
            <ul className="list-group">
              {menuItems.map((item, index) => (
                <li className="list-group-item d-flex align-items-center" key={index}>
                  <i className={`${item.icon} me-2`}></i>
                  <Link
                    to={item.to}
                    className="text-decoration-none text-dark"
                    onClick={handleCloseOffcanvas}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
