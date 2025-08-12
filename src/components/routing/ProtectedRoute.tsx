import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import type { UserRole } from "@/context/AuthContext";

export const ProtectedRoute: React.FC<{ role?: UserRole }> = ({ role }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex h-[60vh] items-center justify-center text-muted-foreground">Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  if (role && user.role !== role) {
    return <Navigate to={user.role === "doctor" ? "/doctor" : "/patient"} replace />;
  }
  return <Outlet />;
};
