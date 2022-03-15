import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../authContext/AuthContext";

import "./NavBar.scss";

const NavBar = () => {
  const auth = useAuth();

  return (
    <div className="navbar-container">
      {auth.authToken ? (
        <>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/logout">Logout</Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/signup">SignUp</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
