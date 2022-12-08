import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function HomePage({ onLogin }) {
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
    fetch("/signup", {
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
    <div className="signup">
      <span className="signuptittle">Sign Up Here</span>
      <form onSubmit={handleSubmit} className="registerform">
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="registerinput"
          type="email"
          value={email}
          placeholder="Enter your email..."
        />
        <label>username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          id="number"
          className="registerinput"
          type="text"
          placeholder="Enter your username..."
        />
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
        <label>Confirmation Password</label>
        <input
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          id="text"
          className="registerinput"
          type="password"
          value={passwordConfirmation}
          placeholder="Confirm password..."
        />
        <button className="loginbutton">Sign Up</button>
        <p>
          Already Signed Up?
          <Link to="/login" style={{ color: "blue", paddingLeft: "10px" }}>
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}