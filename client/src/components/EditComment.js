import '../App.css';
import React, { useState } from "react";
import EditCommentForm from "./EditCommentForm";

function EditComment({ comment, updateComments, user }) {
  const [editComment, setEditComment] = useState(false);

  function handleEditComment() {
    setEditComment(!editComment)
  }

  return (
    <div>
      {editComment ? 
        <EditCommentForm 
          comment={comment}  
          handleEditComment={handleEditComment} 
          updateComments={updateComments}
          user={user}
        /> : <button className="comment-edit" onClick={handleEditComment}>Edit Comment?</button>}
 
    </div>
  )
}

export default EditComment;