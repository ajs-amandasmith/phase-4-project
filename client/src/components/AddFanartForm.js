import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function AddFanartForm({ updateUserFanart, user, updateMyFanart }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [series, setSeries] = useState("");
  const [errors, setErrors] = useState([]);
  const [toFanart, setToFanart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if(toFanart) {
    return <Redirect to="/fanarts" />
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/fanarts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        image,
        description,
        series,
        user_id: user.id
      })
    }).then( r => {
      setIsLoading(false);
      if(r.ok) {
        r.json().then(fanart => {
          updateUserFanart(fanart)
          setToFanart(true)
          updateMyFanart(fanart)
        })
      } else {
        r.json().then(err => {
          setErrors(err.errors)
        })
      }
    })
  }

  return (
    <div>
      <h1>Add Your Fanart!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label><br></br>
        <input 
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br></br>
        <label htmlFor="image">Image URL:</label><br></br>
        <input 
          type="url"
          id="image"
          value={image}
          onChange={e =>setImage(e.target.value)}
        />
        <br></br>
        <label htmlFor="description">Description:</label><br></br>
        <textarea 
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br></br>
        <label htmlFor="series">Series:</label><br></br>
        <input
          type="text"
          id="series"
          value={series}
          onChange={e => setSeries(e.target.value)} 
        />
        <br></br>
        <button
          type="submit" 
        >{isLoading ? "Loading..." : "Add Fanart"}</button>
        {errors.map(err => (
        <p key={err}>{err}</p>
      ))}
      </form>
    </div>
  )
}

export default AddFanartForm;