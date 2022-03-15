import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const login = (authToken, userData) => {
    setAuthToken(authToken);
    setUserData(userData);
  };

  const logout = () => {
    setAuthToken(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, authToken, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
