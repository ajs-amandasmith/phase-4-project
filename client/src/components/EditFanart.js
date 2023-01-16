import React, { useState } from "react";
import EditFanartForm from "./EditFanartForm";

function EditFanart({ editFanart }) {
  const [fanartEdit, setFanartEdit] = useState(false);

  function handleEditFanart() {
    setFanartEdit(!fanartEdit);
  }

  return (
    <div>
      {fanartEdit ? <EditFanartForm handleEditFanart={handleEditFanart}  /> : <button onClick={handleEditFanart}>Edit Fanart?</button>}
    </div>
  )
}

export default EditFanart;