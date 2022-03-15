import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../authContext/AuthContext";

import "./NavBar.scss";

const NavBar = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const auth = useAuth();

  // useEffect(() => {
  //   const authToken = localStorage.getItem("authToken");
  //   if (authToken) {
  //     setIsLogin(true);
  //   }
  // }, []);

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
