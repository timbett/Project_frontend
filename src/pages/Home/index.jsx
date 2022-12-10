import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css"

export default function HomePage({ onLogin }) {
  // eslint-disable-next-line no-unused-vars
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
 function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("https://instant-eats-production.up.railway.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: name,
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          console.log(errors);
        });
      }
    });
  }
  return (
    
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    
      <form onSubmit={handleSubmit} className="registerform">
        <fieldset>
          <legend>SIGN UP HERE</legend>
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="registerinput"
          type="email"
          value={email}
          placeholder="Enter your email..."
        /><br></br>
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          id="number"
          className="registerinput"
          type="text"
          placeholder="Enter your username..."
        /><br></br>
        {/* <label>Location</label>
        <input
          id="text"
          className="registerinput"
          type="text"
          placeholder="Enter your location..."
        /> */}
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className="registerinput"
          type="password"
          value={password}
          placeholder="Enter your password..."
        />
        <label>Confirm Password</label>
        <input
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          id="text"
          className="registerinput"
          type="password"
          value={passwordConfirmation}
          placeholder="Confirm password..."
        /><br></br>
        <button className="loginbutton">Sign Up</button>
        <p>
          Already Signed Up?
          <Link to="/login" style={{ color: "blue", paddingLeft: "10px" }}>
            Login Here
          </Link>
        </p>
        </fieldset>
      </form>
    </div>
  );
}