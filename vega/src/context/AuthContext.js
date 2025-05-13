import { createContext, useContext, useState, useEffect, useMemo } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/auth/verify", { withCredentials: true });
        setUser(response.data);
        console.log("User verified:", response.data);
      } catch (error) {
        setUser(null);
        console.log("Not authenticated");
      } finally {
        setLoading(false); 
      }
    };

    fetchUser();
  }, []);

  const login = async (credentials) => {
    try {
      await api.post("/auth/login", credentials, { withCredentials: true });

    
      const verifyResponse = await api.get("/auth/verify", { withCredentials: true });
      setUser(verifyResponse.data);

      toast.success("Login successful!");
      navigate(getDashboardRoute(verifyResponse.data.role));
    } catch (error) {
      toast.error("Invalid credentials!");
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  const getDashboardRoute = (role) => {
    const roleRoutes = {
      "md/boardofdirectors": "/admin/",
      manager: "/manager/",
      hr: "/hr/",
      employee: "/employee/",
      intern: "/intern/",
    };
    return roleRoutes[role.toLowerCase()] || "/";
  };

  const authContextValue = useMemo(() => ({ user, login, logout, loading }), [user, loading]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
