import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../css/Admin.css";
import EmployeeSidebar from "./EmployeeSidebar";
import EmployeeDashboard from "./EmployeeDashboard";
import Profile from "./Profile";
import ViewBlogsAdmin from "./viewBlogsAdmin";
import ProtectedRoute from "../ProtectedRoutes";
import AddBlog from "./AddBlog";

function EmployeeDashboardRoutes() {
  return (
    <>
      <div className="d-flex">
        <EmployeeSidebar />

        <div className="col-md-9 col-lg-10">
          <Routes>
            <Route path="/" element={<EmployeeDashboard />} />
            <Route
              element={
                <ProtectedRoute
                  allowedRoles={[
                    "md/boardofdirectors",
                    "manager",
                    "hr",
                    "employee",
                    "intern",
                  ]}
                />
              }
            >
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/viewblogsadmin" element={<ViewBlogsAdmin />} />
            <Route path="addblog" element={<AddBlog/>} />
            <Route path="*" element={<div>404 - Page not found</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default EmployeeDashboardRoutes;
