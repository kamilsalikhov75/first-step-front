import { useAuth } from "entities/auth";
import { Role } from "entities/auth/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export interface PrivateRouteProps {
  children: React.ReactNode;
  role?: Role;
}

export const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("access_token");

    if (!token) {
      return navigate("/");
    }

    if (role && role !== user?.role) {
      return navigate("/");
    }
  }, [user, navigate, role]);

  return children;
};
