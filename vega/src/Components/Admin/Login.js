import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/AdminLogin.css";
import loginimg from "../../Assests/login.jpg";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!role || !email || !password) {
      toast.error("Role, email, and password are required!");
      return;
    }

    await login({ role, email, password });
  };

  return (
    <div className="container-fluid admin-login">
      <ToastContainer />
      <div className="row align-items-center">
        <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0">
          <img src={loginimg} alt="Admin Login" className="img-fluid" />
        </div>

        <div className="col-12 col-md-8">
          <div className="login-form">
            <h2 className="mb-4"> Login</h2>
            <p className="text-muted">Select your role and enter credentials.</p>
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)} required>
                  <option value="" disabled>Select Role</option>
                  <option value="md/boardofdirectors">MD/Board of Directors</option>
                  <option value="manager">Manager</option>
                  <option value="hr">HR</option>
                  <option value="employee">Employee</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
