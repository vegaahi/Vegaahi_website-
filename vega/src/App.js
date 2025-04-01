import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BasicProgramming from "./Components/BasicProgramming";
import Programming from "./Components/Programming";
import Testing from "./Components/Testing";
import Designing from "./Components/Designing";
import CloudTechnology from "./Components/CloudTechnology";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Trainings from "./Components/Trainings";
import AcadamicProjects from "./Components/AcadamicProjects";
import Internship from "./Components/Internship";
import LifeAtVegaahi from "./Components/LifeAtVegaahi";
import Carriers from "./Components/Carriers";
import EducationalClinets from "./Components/EducationalClinets";
import Developmentclients from "./Components/DevelopmentClients";

import Jobs from "./Components/Jobs";
import Apply from "./Components/Apply";
import Publications from "./Components/Publications";
import LatestNews from "./Components/LatestNews";
import Updates from "./Components/Updates";

import Tutorials from "./Components/Tutorials";
import Testimonial from "./Components/Testimonial";
import Level1 from "./Components/Level1";
import Level2 from "./Components/Level2";
import Level3 from "./Components/Level3";
import Level4 from "./Components/Level4";
import Level5 from "./Components/Level5";
import ViewBlogs from "./Components/ViewBlogs";
import Login from "./Components/Admin/Login";
import HrDashboardRoutes from "./Components/Admin/HrDashboardRoutes";
import DashboardRoutes from "./Components/Admin/DashboardRoutes";
import EmployeeDashboardRoutes from "./Components/Admin/EmployeeDashboardRoutes";
import ManagerDashboardRoutes from "./Components/Admin/ManagerDashboardRoutes";
import AddBlog from "./Components/Admin/AddBlog";
import ProtectedRoute from "../src/Components/ProtectedRoutes";
import PrivatePolicy from "./Components/PrivacyPolicy";
import ViewBlogsAdmin from "./Components/Admin/viewBlogsAdmin";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from "./Components/Admin/Profile";




// import CarouselComponent from "./Components/CarouselComponent";
// import Testimonial from "./Components/Testimonial";



function App() {
  return (
    <Router>
      <div>
      <AuthProvider>

        
        <Navbar />
       
        <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/basic-programming" element={<BasicProgramming />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/designing" element={<Designing />} />
          <Route path="/cloud-technology" element={<CloudTechnology />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="services" element={<Services />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="trainings" element={<Trainings/>} />
          <Route path="acadamicprojects" element={<AcadamicProjects/>} />
          <Route path="internships" element={<Internship/>} />
          <Route path="carries" element={<Carriers/>} />
          <Route path="lifeatvegaahi" element={<LifeAtVegaahi/>} />
          <Route path="privacypolicy" element={<PrivatePolicy/>} />
          <Route path="educationalclients" element={<EducationalClinets/>} />
          <Route path="developmentclients" element={<Developmentclients/>} />
          <Route path="jobs" element={<Jobs/>} />
          <Route path="publications" element={<Publications/>} />
          <Route path="latestnews" element={<LatestNews/>} />
          <Route path="updates" element={<Updates/>} />
          <Route path="tutorials" element={<Tutorials/>} />
          <Route path="testimonaials" element={<Testimonial/>} />
          <Route path="level1" element={<Level1/>} />
          <Route path="level2" element={<Level2/>} />
          <Route path="level3" element={<Level3/>} />
          <Route path="level4" element={<Level4/>} />
          <Route path="level5" element={<Level5/>} />
          <Route path="addblog" element={<AddBlog/>} />
          <Route path="viewblogs" element={<ViewBlogs/>} />
          <Route path="/viewblogsadmin" element={<ViewBlogsAdmin/>} />
          <Route path="/apply/:jobId" element={<Apply />} />
        
          {/* <Route path="/hr/*" element={<HrDashboardRoutes/>} /> 
          <Route path="/admin/*" element={<DashboardRoutes/>} /> 
          <Route path="/manager/*" element={<ManagerDashboardRoutes/>} /> 
          <Route path="/employee/*" element={<EmployeeDashboardRoutes/>} />  */}


          <Route element={<ProtectedRoute allowedRoles={["md/boardofdirectors"]} />}>
            <Route path="/admin/*" element={<DashboardRoutes />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["manager"]} />}>
            <Route path="/manager/*" element={<ManagerDashboardRoutes />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["hr"]} />}>
            <Route path="/hr/*" element={<HrDashboardRoutes />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["employee"]} />}>
            <Route path="/employee/*" element={<EmployeeDashboardRoutes />} />
          </Route>

          

          {/* <Route element={<ProtectedRoute allowedRoles={["Intern"]} />}>
            <Route path="/intern/*" element={<InternDashboard />} />
          </Route> */}
       
          {/* Dashboard is the main page for admin */}
        </Routes>
        
        </AuthProvider>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
