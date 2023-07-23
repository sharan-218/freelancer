import React from "react";
import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((usrCred) => {
        alert("logged in successfully");
      })
      .catch(() => alert("user not found"));
  };
  return (
    <>
      <div className="form-container">
        <h1 id="login">Login</h1>
        <form onSubmit={login} className="form">
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(mail) => setEmail(mail.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(pass) => {
              setPassword(pass.target.value);
            }}
          />
          <br />
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
        <div className="b-links">
          <Link to="/">Home</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
