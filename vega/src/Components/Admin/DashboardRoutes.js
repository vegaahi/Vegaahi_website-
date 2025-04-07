import React from 'react'
import {  Route, Routes } from "react-router-dom";

import ViewEmployee from "./ViewEmployee";
import HrDashboard from "./HrDashboard";
import "../../css/Admin.css";
import SideBar from "./SideBar";
import ExperienceLetter from "./ExperienceLetter";
import IncrementLetter from "./IncrementLetter";
import OfferLetter from "./OfferLetter";
import Payslips from "./Payslips";
import AddEmployee from "./AddEmployee";
import Dashboard from './Dashboard';
import AdminSidebar from './AdminSidebar';
import ViewHr from './ViewHr';
import AddHr from './AddHr';
import UpdateHr from './UpdateHr';

const DashboardRoutes = () => {
  return (
    <>
      <div className="d-flex me-1 ">
        <AdminSidebar />

        <div className=" col-md-9 col-lg-10 ">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/viewemployee" element={<ViewEmployee />} />
            <Route path="/experienceletter" element={<ExperienceLetter />} />
            <Route path="/incrementletter" element={<IncrementLetter />} />
            <Route path="/offerletter" element={<OfferLetter />} />
            <Route path="/payslips" element={<Payslips />} />
            <Route path="/addemployee" element={<AddEmployee />} />
          
            <Route path="/viewhr" element={<ViewHr />} />
            <Route path="/addhr" element={<AddHr/>} />
            <Route path="/updatehr" element={<UpdateHr/>} />
            <Route path="*" element={<div>404 - Page not found</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
  
}

export default DashboardRoutes
