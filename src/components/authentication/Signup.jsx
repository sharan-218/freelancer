import React from "react";
import "./signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((usrCred) => console.log(usrCred))
      .then(() => console.log("Account created successfully"));
    alert("Account created successfully").catch((err) => console.log(err));
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={signin} className="form">
          <h1 id="signup">create account</h1>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(mail) => setEmail(mail.target.value)}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(pass) => {
              setPassword(pass.target.value);
            }}
          />
          <br />
          <button type="submit" id="submit">
            sign up
          </button>
        </form>
        <div className="b-links">
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
