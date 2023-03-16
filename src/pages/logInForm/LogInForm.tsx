import React, { useState } from "react";
import "./logInForm.module.css";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate()
  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify( {
        identifier: username,
        password: password,
      }),
    }).then(res=>  nav("/dashboard"))
   
  };

  return (
    <div className="d-flex justify-content-center h-100 align-items-center">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group my-3">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
