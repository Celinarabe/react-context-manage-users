import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Greeting = () => {
  const { user } = useContext(AuthContext);

  return (
    <h1>{user.email ? `Welcome Back ${user.email}!` : "Welcome Guest"}</h1>
  );
};

export default Greeting;
