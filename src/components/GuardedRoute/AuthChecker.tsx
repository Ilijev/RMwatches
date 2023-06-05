import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthCheckerProps {
  children: React.ReactNode;
  isAuthenticated:boolean;
}

const AuthChecker: React.FC<AuthCheckerProps> = ({ children,isAuthenticated }) => {
  // Check if the user is authenticated here
  // const isAuthenticated = true;

  if (!isAuthenticated) {
    // Redirect the user to the login page if they are not authenticated
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default AuthChecker;
