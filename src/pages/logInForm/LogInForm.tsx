import React, { useState } from "react";
import "./logInForm.module.css";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notOk, setNotOk] = useState(false)
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
    }).then(res=>  {
     res.ok?
      // nav("/dashboard") 
      console.log(res)

     :
        setNotOk(true)

        console.log(res)
        })

   
  };

  return (
    <div className="d-flex justify-content-center h-100 align-items-center">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="text-center text-capitalize">Log in</h2>
        {notOk && <p>User information not valid</p>}
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
