import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../login/Login";
import NavBar from "../navbar/NavBar";
import SignUp from "../signup/SignUp";
import Home from "../homepage/Home";

import "./Layout.scss";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="layout-container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
