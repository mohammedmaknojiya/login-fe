import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../authContext/AuthContext";

const PrivateRoutes = ({ children }) => {
  const auth = useAuth();

  return auth && auth.authToken ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoutes;
