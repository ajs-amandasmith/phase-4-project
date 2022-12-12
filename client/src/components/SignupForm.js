import React, { useState } from "react";

function SignupForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [nickname, setNickname] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        nickname
      })
    }).then(r => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then(err => setErrors(err.errrors));
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
      <label htmlFor="password_confirmation">Password Confirmation</label>
      <input 
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
      />
      <br></br>
      <label htmlFor="nickname">Nickname</label>
      <input 
        type="text"
        id="nickname"
        value={nickname}
        onChange={e => setNickname(e.target.value)}
      />
      <br></br>
      <label htmlFor="image_url">Profile Image</label>
      <input 
        type="text"
        id="image_url"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
      />
      <br></br>
      <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      {errors.map(err => (
        <p key={err}>{err}</p>
      ))}
    </form>
  )

}

export default SignupForm;