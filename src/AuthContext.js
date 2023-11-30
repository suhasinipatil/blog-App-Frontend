import React, { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSetUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const handleSetToken = (newToken) => {
    setToken(newToken);
  };

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