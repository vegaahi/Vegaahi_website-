import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MangerDashboard from './MangerDashboard'
import MangerSidebar from './MangerSidebar'
import ViewEmployee from './ViewEmployee'
import ViewScheduling from './ViewScheduling'
import Workstatus from './Workstatus'
import AccessAccountings from './AccessAccountings'
const ManagerDashboardRoutes = () => {
  return (
    <div>
       <>
      <div className="d-flex me-1">
        <MangerSidebar />

        <div className=" col-md-9 col-lg-10 ">
          <Routes>
            <Route path="/viewemployee" element={<ViewEmployee/>} />
            {/* <Route path="/" element={<Dashboard/>} />
            <Route path="/experienceletter" element={<ExperienceLetter />} />
            <Route path="/incrementletter" element={<IncrementLetter />} />
            <Route path="/offerletter" element={<OfferLetter />} />
            <Route path="/payslips" element={<Payslips />} />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/updateemployee" element={<UpdateEmployee />} />
            <Route path="/viewhr" element={<ViewHr />} />
            <Route path="/addhr" element={<AddHr/>} />
            <Route path="/updatehr" element={<UpdateHr/>} /> */}
            <Route path='/accessaccounting'element={<AccessAccountings/>}/>
            <Route path='/workstatus'element={<Workstatus/>}/>
            <Route path="/viewscheduling" element={<ViewScheduling />} />
            <Route path="/" element={<MangerDashboard/>} />
            <Route path="*" element={<div>404 - Page not found</div>} />
          </Routes>
        </div>
      </div>
    </>
    </div>
  )
}

export default ManagerDashboardRoutes
