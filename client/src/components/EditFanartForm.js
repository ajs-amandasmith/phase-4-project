import React from "react";

function EditFanartForm({ handleEditFanart }) {

  function handleSubmitForm(e) {
    console.log(e);
  }

  return (
    <div>
      <form>
        <input type="url"></input>
        <button onClick={handleEditFanart}>Cancel</button>
      </form>
    </div>
  )
}

export default EditFanartForm;