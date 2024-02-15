import { useAuth } from "entities/auth";
import { Role } from "entities/auth/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface PrivateRouteProps {
  children: React.ReactNode;
  role?: Role;
}

export const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
    if (role && role !== user.role.name) {
      return navigate("/");
    }
  }, [user, navigate, role]);

  return children;
};
