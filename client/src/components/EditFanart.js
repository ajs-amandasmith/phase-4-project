import React, { useState } from "react";
import EditFanartForm from "./EditFanartForm";

function EditFanart({ url, setUrl, title, setTitle, description, setDescription, series, setSeries, id, setCurrentFanart }) {
  const [fanartEdit, setFanartEdit] = useState(false);

  function handleEditFanart() {
    setFanartEdit(!fanartEdit);
  }

  return (
    <div>
      {fanartEdit ? 
        <EditFanartForm 
          handleEditFanart={handleEditFanart} 
          url={url}
          setUrl={setUrl} 
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          series={series}
          setSeries={setSeries}
          id={id}
          setCurrentFanart={setCurrentFanart}
          setFanartEdit={setFanartEdit}
          fanartEdit={fanartEdit}
        /> : <button onClick={handleEditFanart}>Edit Fanart?</button>}
    </div>
  )
}

export default EditFanart;