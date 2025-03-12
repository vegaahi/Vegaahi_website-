import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust path based on your project structure

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />; // Redirect if not authenticated
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />; // Restrict access

  return <Outlet />; // Render child routes if authorized
};

export default ProtectedRoute;
