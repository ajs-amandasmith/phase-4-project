import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then(user => onLogin(user));
        } else {
          r.json().then(err => setErrors(err.errors));
        }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <br></br>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br></br>
      <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
      {errors.map(err => (
        <p key={err}>{err}</p>
      ))}
      <br></br>
      <Link to="/signup">Or Sign Up!</Link>
    </form>
  )
}

export default Login;