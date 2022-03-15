import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/auth_api";
import { useAuth } from "../authContext/AuthContext";

import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  console.log(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: userData } = await loginUser({ email, password });
    if (userData.authToken) {
      localStorage.setItem("userData", JSON.stringify(userData.data));
      localStorage.setItem("authToken", JSON.stringify(userData.authToken));
      auth.login(userData.authToken, userData.data);
      navigate("/");
    } else {
      alert("please enter correct details");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
