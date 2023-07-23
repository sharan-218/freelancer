import React from "react";
import firebase from "../../firebase";
import { db } from "../../firebase";
const Contact = () => {
  return (
    <>
      <div className="main">
        <form className="c-form">
          <label>name</label> <br />
          <input type="text" placeholder="" /> <br />
          <label htmlFor="email">email</label>
          <br />
          <input type="email" placeholder="" />
          <br />
          <textarea id="message" cols="30" rows="10"></textarea>
          <button type="submit">submit message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
