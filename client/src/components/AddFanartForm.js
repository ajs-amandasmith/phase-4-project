import React, { useState } from "react";

function AddFanartForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [series, setSeries] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
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
        <input
          type="submit" 
        />
      </form>
    </div>
  )
}

export default AddFanartForm;