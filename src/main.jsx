import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login.jsx";
import Signup from "./components/authentication/Signup.jsx";
import UserDetails from "./components/users/UserDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users:userId" element={<UserDetails />} />
    </Routes>
  </BrowserRouter>
);
