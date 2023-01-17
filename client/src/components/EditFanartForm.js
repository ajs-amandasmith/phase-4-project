import React, { useState } from "react";

function EditFanartForm({ handleEditFanart, url, setUrl, title, setTitle, description, setDescription, series, setSeries, id, setCurrentFanart, fanartEdit }) {
  const [errors, setErrors] = useState([]);

  function handleSubmitForm(e) {
    e.preventDefault();
    fetch(`/fanarts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        image: url,
        series: series
      })
    }).then(r => {
      if(r.ok) {
        r.json().then(art => {
          handleEditFanart();
          setCurrentFanart(art);
        })
      } else {
        r.json().then(err => {
          setErrors(err.errors)
        });
      }
    })
    
  }

  return (
    <div>
      {fanartEdit ? <form onSubmit={e => handleSubmitForm(e)}>
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
        {errors.map(err => (
        <p key={err}>{err}</p>
          ))}
      </form> : null}
    </div>
  )
}

export default EditFanartForm;