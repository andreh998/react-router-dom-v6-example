import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  isAuthenticated: boolean;
  verifyUser: () => boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const verifyUser = () => {
    const token = localStorage.getItem("user")
    console.log('verificando token: ', isAuthenticated);
    if(token) {
      return true
    } else {
      logoutUser()
      return false
    }
  }

  const loginUser = () => {
    // Perform authentication logic
    localStorage.setItem("user", "andre")
    setIsAuthenticated(true);
    navigate("/home")
  };

  const logoutUser = () => {
    // Perform logout logic
    localStorage.removeItem("user")
    setIsAuthenticated(false);
    navigate("/login", { replace: true })
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, verifyUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};