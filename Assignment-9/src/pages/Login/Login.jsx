import React, { useState } from "react";
// import React, { Component } from "react";

import "./login.css";
const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email,
        password,
      }).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          res
            .json()
            .then((user) => setUser(user))
            .catch((err) => alert(err));
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => {
        alert("Invalid email or password");
      });
  };
  return (
    <div className="container">
      <div className="sub_container">
        <h1 className="header">Sign In</h1>
        <div className="form_container">
          <input
            placeholder="Email"
            className="input_container"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="input_container"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={loginUser} className="btn" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;





