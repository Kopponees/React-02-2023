import React, { createContext, useState } from 'react';


export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(determineIfLoggedIn());

  function determineIfLoggedIn() {
    if (sessionStorage.getItem("token") !== null) {
        return true;
    } else {
        return false;
    }
  }

  const contextValue = {
    loggedIn,
    setLoggedIn,
  };
return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};