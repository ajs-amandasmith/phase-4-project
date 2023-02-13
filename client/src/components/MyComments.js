import React, { useState, useEffect } from 'react'

function MyComments() {
  const [myComments, setMyComments] = useState([]);



  useEffect(() => {
    fetch("/my-comments")
      .then(r => r.json())
      .then(comments => setMyComments(comments))
  }, [])

  console.log(myComments)


  return (
    <div>

    </div>
  )
}

export default MyComments;