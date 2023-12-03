import React, { useState, createContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSetUsername = (newUsername) => {
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
  };

  const handleSetToken = (newToken) => {
    setToken(newToken);
    // Storing the token
    localStorage.setItem('token', newToken);
  };

  useEffect(() => {
    const handleLoad = () => {
      // Check if the token exists in localStorage
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        setLoggedIn(true);
        setUsername(localStorage.getItem('username'));
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const handleSetLoggedIn = (status) => {
    setLoggedIn(status);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        loggedIn,
        username,
        setToken: handleSetToken,
        setLoggedIn: handleSetLoggedIn,
        setUsername: handleSetUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };