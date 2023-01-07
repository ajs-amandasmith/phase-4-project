import React from "react";
import { useParams } from "react-router-dom";

function Fanart() {
  const params = useParams();
  console.log('params', params);

  return (
    <div>
      <h3>Fanart</h3>
    </div>
  )
}

export default Fanart;