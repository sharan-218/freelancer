import "./App.css";
import Signup from "./components/authentication/Signup";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="nav-wrapper">
        <h1 id="nav-title">WYD</h1>
        <ul className="n-w-links">
          <li className="links">
            <Link to="/login">Login</Link>
          </li>
          <li className="links">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="links">
            <Link href="">Hiring</Link>
          </li>
          <li className="links">
            <Link to="/">Companies</Link>
          </li>
        </ul>
        <ul className="n-w-btns">
          <li>
            <button className="n-btns login">About</button>
          </li>
          <li>
            <button className="n-btns start">
              <Link to={Signup}></Link>
            </button>
          </li>
        </ul>
      </div>
      <Hero />
      <Contact />
    </>
  );
}

export default App;
