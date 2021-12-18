import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({});

  //callback to update the auth context from children components
  const handleAuthChange = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, handleAuthChange }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
