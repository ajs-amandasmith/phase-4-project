import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function MyCommentedFanart() {
  const [myComments, setMyComments] = useState([]);

  useEffect(() => {
    fetch("/commented-fanart")
      .then(r => r.json())
      .then(comments => setMyComments(comments))
  }, [])

  const displayComments = myComments.map(comment => (
    <div key={comment.id} >
      <li>Fanart Title: <Link to={`/fanarts/${comment.id}`}>{comment.title}</Link></li>
    </div>
  ))

  return (
    <div>
      <h1>Fanart I've Commented On:</h1>
      <hr></hr>
      <ul>
        {displayComments}
      </ul>
    </div>
  )
}

export default MyCommentedFanart;