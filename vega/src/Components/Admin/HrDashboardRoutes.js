import React from "react";
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
import EditEmployee from "./EditEmployee";
import Messages from "./Messages";


function HrDashboardRoutes() {
  return (
    <>
      <div className="d-flex">
        <SideBar />

        <div className="col-md-9 col-lg-10">
          <Routes>
            <Route path="/" element={<HrDashboard/>} />
            <Route path="/viewemployee" element={<ViewEmployee />} />
            <Route path="/editemployee/:id" element={<EditEmployee />} />
            <Route path="/experienceletter" element={<ExperienceLetter />} />
            <Route path="/incrementletter" element={<IncrementLetter />} />
            <Route path="/offerletter" element={<OfferLetter />} />
            <Route path="/payslips" element={<Payslips />} />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/viewmessages" element={<Messages/>} />
            <Route path="*" element={<div>404 - Page not found</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default HrDashboardRoutes;
