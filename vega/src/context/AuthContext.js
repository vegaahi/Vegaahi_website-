
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import api from "../api";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { toast } from 'react-toastify';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
   //Verify user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/employee/getbyemail/${user?.email}`, { withCredentials: true });
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        setUser(null);
        console.log("error");
      }
    };
    fetchUser();
  }, []);
  const login = async (credentials) => {
    try {
      const response = await api.post("/auth/login", credentials, { withCredentials: true });
      setUser(response.data);
      console.log(response.data);
      toast.success("Login successful!");
      navigate(getDashboardRoute(response.data.role));
    } catch (error) {
      toast.error("Invalid credentials!");
      setUser(null);
    }
  };
  const logout = async () => {
    setUser(null);
    navigate("/login");
  };
  
  // Function to determine user dashboard route
  const getDashboardRoute = (role) => {
    const roleRoutes = {
      "md/boardofdirectors": "/admin/",
      "manager": "/manager/",
      "hr": "/hr/",
      "employee": "/employee/",
      "intern": "/intern/",
    };
    return roleRoutes[role] || "/";
  };
  const authContextValue = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
