import { useState, useEffect } from "react";
import "./users.css";
import { Link } from "react-router-dom";
import bg1 from "../../assets/desk2.png";
import bg2 from "../../assets/react.svg";
import bg3 from "../../assets/undraw.svg";
const Users = () => {
  const imgs = [bg1, bg2, bg3];
  let val = Math.ceil(Math.random() * 0);
  const [name, setName] = useState([]);
  console.log(val);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((resp) => resp.json())
      .then((data) => setName(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {/* <ul>
        {name.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul> */}
      <h1 id="u-title">Community</h1>
      <div className="user-section">
        {name.map((item, index) => (
          <ul className="user-card" key={index}>
            <li>
              name: <span>{item.name}</span>
            </li>
            <li>{/* User name: <span>{item.username}</span> */}</li>
            <li>
              email: <span>{item.email}</span>
            </li>
            <li>{/* city: <span>{item.address.city}</span> */}</li>
            <li>{/* website: <span>{item.website}</span> */}</li>

            <p>{item.body}</p>
            {/* <img src={imgs[val]} alt="image" /> */}
            <Link to="/users:userId" id="u-hire">
              Hire
            </Link>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Users;
