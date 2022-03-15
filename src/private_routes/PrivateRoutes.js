import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../authContext/AuthContext";

const PrivateRoutes = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth && auth.authToken ? (
    children
  ) : (
    <Navigate to="/login" replace={true} state={{ path: location.pathname }} />
  );
};

export default PrivateRoutes;
