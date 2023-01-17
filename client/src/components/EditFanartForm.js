import React, { useState } from "react";

function EditFanartForm({ handleEditFanart }) {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [series, setSeries] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <form onSubmit={e => handleSubmitForm(e)}>
        <label htmlFor="url">Update URL</label><br />
        <input 
          type="url" 
          id="url" 
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <br />
        <label htmlFor="title">Update Title</label><br />
        <input 
          type="text" 
          id="title" 
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="description">Update Description</label><br />
        <textarea 
          id="description" 
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="series">Update Series</label><br />
        <input 
          type="text" 
          id="series" 
          value={series}
          onChange={e => setSeries(e.target.value)}
        />
        <br />
        <input type="submit"></input>
        <button onClick={handleEditFanart}>Cancel</button>
      </form>
    </div>
  )
}

export default EditFanartForm;