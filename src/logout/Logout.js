import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../authContext/AuthContext";

const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    auth.logout();
    navigate("/login");
  };

  return (
    <div>
      <button onClick={() => logoutUser()}>Logout</button>
    </div>
  );
};

export default Logout;
