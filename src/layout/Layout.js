import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "../login/Login";
import NavBar from "../navbar/NavBar";
import SignUp from "../signup/SignUp";
import Home from "../homepage/Home";
import Logout from "../logout/Logout";
import PrivateRoutes from "../private_routes/PrivateRoutes";
import { AuthProvider } from "../authContext/AuthContext";

import "./Layout.scss";

const Layout = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className="layout-container">
            <Routes>
              <Route exact path="signup" element={<SignUp />} />
              <Route exact path="login" element={<Login />} />
              <Route
                exact
                path="logout"
                element={
                  <PrivateRoutes>
                    <Logout />
                  </PrivateRoutes>
                }
              />
              <Route
                exact
                path="/"
                element={
                  <PrivateRoutes>
                    <Home />
                  </PrivateRoutes>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default Layout;
