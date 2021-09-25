import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthForm = () => {
  const {user, handleAuthChange} = useContext(AuthContext);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLogin({
      ...login,
      [id]:value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    handleAuthChange({email: login.email})
  }

  const handleSignout = () => {
    setLogin({})
    handleAuthChange({email: ""})
  }

  const renderSignOutPage = () => {
    return (
      <div className="center">
      <button onClick={handleSignout}>Sign Out</button>
      </div>
    )
  }

  const renderLoginPage = () => {
    return (
      <div className="center ">
        <div className="auth-form">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input className="text-input" type="text" id="email" onChange={handleChange} value={login.email}/>
        </label>
        <label>
          Password:
          <input className="text-input" type="password" id="password" onChange={handleChange} value={login.password} />
        </label>
        <input type="submit" value="Log In" />
      </form>
      </div>
    </div>
    )
  }


  return (
    <div>
      {user.email? renderSignOutPage() : renderLoginPage()}
    </div>
  );
};

export default AuthForm;
